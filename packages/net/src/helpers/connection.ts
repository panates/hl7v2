import { EventEmitter } from 'node:events';
import net from 'node:net';
import tls from 'node:tls';

/**
 * A SOCKS proxy a client connects through: v4 (with v4a, the proxy
 * resolving a host name) or v5, with a user ID (v4) or a user name and
 * password (v5) when the proxy asks for them. The shape of the `socks`
 * package's SocksProxy.
 */
export interface HL7ProxyOptions {
  host: string;
  port: number;
  type: 4 | 5;
  /** v4: the user ID; v5: the user name */
  userId?: string;
  /** v5: the password, with userId */
  password?: string;
}

/**
 * Opens a connection to `host`:`port` - a connected socket, plain TCP: a
 * TLS client starts TLS over it. Called for every connection attempt,
 * reconnects included.
 */
export type HL7ConnectionFactory = (options: {
  host: string;
  port: number;
  /** Milliseconds the attempt may take (the client's connectTimeout) */
  timeout?: number;
}) => Promise<net.Socket>;

/** A connection factory tunnelling through a SOCKS proxy */
export function socksConnection(proxy: HL7ProxyOptions): HL7ConnectionFactory {
  return async ({ host, port, timeout }) => {
    /* Loaded on first use: a client without a proxy never needs it */
    const { SocksClient } = await import('socks');
    const { socket } = await SocksClient.createConnection({
      command: 'connect',
      destination: { host, port },
      proxy: {
        host: proxy.host,
        port: proxy.port,
        type: proxy.type,
        userId: proxy.userId,
        password: proxy.password,
      },
      timeout,
    });
    return socket;
  };
}

/**
 * A connection opened asynchronously - through a proxy, or a factory of the
 * caller's - standing for its socket until the socket is ready: for a TLS
 * client, once the handshake over it is done. It emits what the reconnect
 * logic listens for ('connect', 'error', 'close', 'end') and ends the
 * socket, or drops the attempt, on end().
 */
export class HL7PendingConnection extends EventEmitter {
  socket?: net.Socket;
  protected _ended = false;

  constructor(
    open: () => Promise<net.Socket>,
    /** The socket's event marking it ready: 'secureConnect' over TLS */
    readyEvent?: string,
  ) {
    super();
    open().then(
      socket => {
        if (this._ended) {
          socket.destroy();
          return;
        }
        this.socket = socket;
        /* After the reconnect logic stopped listening, an error is the HL7Socket's */
        socket.on('error', e => {
          if (this.listenerCount('error')) this.emit('error', e);
        });
        socket.on('close', () => this.emit('close'));
        socket.on('end', () => this.emit('end'));
        if (readyEvent) socket.once(readyEvent, () => this.emit('connect'));
        else this.emit('connect');
      },
      error => {
        if (this.listenerCount('error')) this.emit('error', error);
        this.emit('close');
      },
    );
  }

  end() {
    this._ended = true;
    this.socket?.end();
  }

  destroy(error?: Error) {
    this._ended = true;
    if (this.socket) this.socket.destroy(error);
    else if (error && this.listenerCount('error')) this.emit('error', error);
  }
}

/**
 * Opens a client connection through a factory: the socket it gives, and for
 * a TLS client a TLS socket over it, with the client's TLS options
 */
export function openThrough(
  factory: HL7ConnectionFactory,
  options: tls.ConnectionOptions & net.TcpNetConnectOpts,
  secure: boolean,
  timeout?: number,
): HL7PendingConnection {
  return new HL7PendingConnection(
    async () => {
      const socket = await factory({
        host: options.host || 'localhost',
        port: options.port,
        timeout,
      });
      if (!secure) return socket;
      const { host } = options;
      return tls.connect({
        ...options,
        socket,
        /* SNI and the certificate check are for the server, not the proxy */
        servername:
          options.servername ?? (host && !net.isIP(host) ? host : undefined),
      });
    },
    secure ? 'secureConnect' : undefined,
  );
}
