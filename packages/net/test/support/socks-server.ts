import net from 'node:net';

/**
 * A SOCKS server for the tests: v4, v4a and v5 CONNECT, without
 * authentication or with a user name and password (v5). It counts the
 * tunnels it opens and where to.
 */
export class TestSocksServer {
  readonly server: net.Server;
  readonly tunnels: string[] = [];
  /** v5: require this user name and password */
  credentials?: { userId: string; password: string };
  /** Accept connections and say nothing, as a proxy that hangs */
  silent = false;
  protected _sockets = new Set<net.Socket>();

  constructor() {
    this.server = net.createServer(socket => this._accept(socket));
  }

  get port(): number {
    return (this.server.address() as net.AddressInfo).port;
  }

  listen(): Promise<void> {
    return new Promise(resolve => this.server.listen(0, '127.0.0.1', resolve));
  }

  close(): Promise<void> {
    for (const s of this._sockets) s.destroy();
    return new Promise(resolve => this.server.close(() => resolve()));
  }

  protected _accept(client: net.Socket) {
    this._sockets.add(client);
    client.on('close', () => this._sockets.delete(client));
    client.on('error', () => undefined);
    if (this.silent) return;
    let buffer = Buffer.alloc(0);
    let stage: 'greeting' | 'auth' | 'request' = 'greeting';
    const onData = (data: Buffer) => {
      buffer = Buffer.concat([buffer, data]);
      for (;;) {
        const used = step();
        /* 0: more bytes needed; -1: the handshake is over */
        if (used <= 0) return;
        buffer = buffer.subarray(used);
      }
    };
    /** Consumes one protocol step; 0 when more bytes are needed, -1 when done */
    const step = (): number => {
      if (stage === 'greeting') {
        if (buffer.length < 2) return 0;
        if (buffer[0] === 4) return this._v4(client, buffer, onData);
        const n = buffer[1];
        if (buffer.length < 2 + n) return 0;
        const methods = [...buffer.subarray(2, 2 + n)];
        const method = this.credentials ? 2 : 0;
        if (!methods.includes(method)) {
          client.end(Buffer.from([5, 0xff]));
          return -1;
        }
        client.write(Buffer.from([5, method]));
        stage = this.credentials ? 'auth' : 'request';
        return 2 + n;
      }
      if (stage === 'auth') {
        if (buffer.length < 2) return 0;
        const ulen = buffer[1];
        if (buffer.length < 3 + ulen) return 0;
        const plen = buffer[2 + ulen];
        if (buffer.length < 3 + ulen + plen) return 0;
        const user = buffer.subarray(2, 2 + ulen).toString();
        const pass = buffer.subarray(3 + ulen, 3 + ulen + plen).toString();
        const ok =
          user === this.credentials!.userId &&
          pass === this.credentials!.password;
        client.write(Buffer.from([1, ok ? 0 : 1]));
        if (!ok) {
          client.end();
          return -1;
        }
        stage = 'request';
        return 3 + ulen + plen;
      }
      /* v5 request: VER CMD RSV ATYP DST.ADDR DST.PORT */
      if (buffer.length < 5) return 0;
      const atyp = buffer[3];
      let host: string;
      let end: number;
      if (atyp === 1) {
        end = 4 + 4;
        if (buffer.length < end + 2) return 0;
        host = [...buffer.subarray(4, 8)].join('.');
      } else if (atyp === 3) {
        end = 5 + buffer[4];
        if (buffer.length < end + 2) return 0;
        host = buffer.subarray(5, end).toString();
      } else {
        client.end(Buffer.from([5, 8, 0, 1, 0, 0, 0, 0, 0, 0]));
        return -1;
      }
      const port = buffer.readUInt16BE(end);
      const rest = buffer.subarray(end + 2);
      this._tunnel(client, host, port, rest, onData, ok =>
        Buffer.from([5, ok ? 0 : 5, 0, 1, 0, 0, 0, 0, 0, 0]),
      );
      return -1;
    };
    client.on('data', onData);
  }

  /** v4 / v4a: VER CMD PORT IP USERID 0 [HOST 0] */
  protected _v4(
    client: net.Socket,
    buffer: Buffer,
    onData: (data: Buffer) => void,
  ): number {
    const userEnd = buffer.indexOf(0, 8);
    if (buffer.length < 9 || userEnd < 0) return 0;
    const port = buffer.readUInt16BE(2);
    let host = [...buffer.subarray(4, 8)].join('.');
    let end = userEnd + 1;
    /* 0.0.0.x: v4a, the host name follows */
    if (buffer[4] === 0 && buffer[5] === 0 && buffer[6] === 0) {
      const hostEnd = buffer.indexOf(0, end);
      if (hostEnd < 0) return 0;
      host = buffer.subarray(end, hostEnd).toString();
      end = hostEnd + 1;
    }
    this._tunnel(client, host, port, buffer.subarray(end), onData, ok =>
      Buffer.from([0, ok ? 0x5a : 0x5b, 0, 0, 0, 0, 0, 0]),
    );
    return -1;
  }

  protected _tunnel(
    client: net.Socket,
    host: string,
    port: number,
    rest: Buffer,
    onData: (data: Buffer) => void,
    reply: (ok: boolean) => Buffer,
  ) {
    client.removeListener('data', onData);
    client.pause();
    const target = net.connect({ host, port }, () => {
      this.tunnels.push(`${host}:${port}`);
      client.write(reply(true));
      if (rest.length) target.write(rest);
      client.pipe(target);
      target.pipe(client);
      client.resume();
    });
    this._sockets.add(target);
    target.on('close', () => {
      this._sockets.delete(target);
      client.destroy();
    });
    client.on('close', () => target.destroy());
    target.on('error', () => client.end(reply(false)));
  }
}
