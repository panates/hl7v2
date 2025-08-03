import { Buffer } from 'node:buffer';
import { Transform } from 'node:stream';
import { TransformCallback, TransformOptions } from 'stream';
import { StrictOmit } from 'ts-gems';

export class FrameStream extends Transform {
  private _chunks: Buffer[] = [];
  private _chunkBuffer?: Buffer;
  private _flushTimeout?: NodeJS.Timeout;
  private readonly _frameDelayMs: number;
  private readonly _frameStart?: Buffer;
  private readonly _frameEnd?: Buffer;
  private _bufferSize = 0;
  private readonly _customTransform?: Function;
  maxBufferSize?: number;

  constructor(
    opts?: StrictOmit<TransformOptions, 'objectMode'> & {
      encoding?: string;
      /**
       * Time in milliseconds to be waited before accepting a buffer as a frame
       */
      frameDelayMs?: number;
      /**
       * The start character(s) or byte(s) of the actual frame
       */
      frameStart?: Buffer | string;
      frameEnd?: Buffer | string;
      maxBufferSize?: number;
    },
  ) {
    super({
      ...opts,
      objectMode: true,
      transform: undefined,
    });
    this._customTransform = opts?.transform;
    this._frameDelayMs = opts?.frameDelayMs || (opts?.frameEnd ? 0 : 500);
    this.maxBufferSize = opts?.maxBufferSize;
    if (opts?.frameStart) {
      this._frameStart = Buffer.isBuffer(opts.frameStart)
        ? opts.frameStart
        : Buffer.from(opts.frameStart);
    }
    if (opts?.frameEnd) {
      this._frameEnd = Buffer.isBuffer(opts.frameEnd)
        ? opts.frameEnd
        : Buffer.from(opts.frameEnd);
    }
  }

  _transform(
    chunk: Buffer | string,
    _encoding: BufferEncoding,
    callback: TransformCallback,
  ) {
    // Reset flush timer
    if (this._flushTimeout) {
      clearTimeout(this._flushTimeout);
    }
    try {
      // console.log(chunk);
      if (!Buffer.isBuffer(chunk)) chunk = Buffer.from(chunk);

      if (this._chunkBuffer) {
        this._assertMaxBuffer(chunk.length);
        chunk = Buffer.concat([this._chunkBuffer, chunk]);
        this._chunkBuffer = undefined;
      }

      const frameStart = this._frameStart;
      const frameEnd = this._frameEnd;
      if (frameStart || frameEnd) {
        const stxLen = frameStart?.length || 0;
        const etxLen = frameEnd?.length || 0;
        let stxPos: number = 0;
        let etxPos: number = 0;
        while (etxPos < chunk.length) {
          /** Find the next stx position */
          stxPos = etxPos;
          if (frameStart) {
            stxPos = chunk.indexOf(frameStart, etxPos);
            if (stxPos < 0) {
              this._chunkBuffer = chunk.subarray(etxPos);
              return;
            }
          }
          if (stxPos < 0) stxPos = 0;
          etxPos = frameEnd
            ? /** Find the next etx position if frameEnd defined */
              chunk.indexOf(frameEnd, stxPos + stxLen)
            : frameStart
              ? /** Find the next stx if frameStart not defined */
                chunk.indexOf(frameStart, stxPos + stxLen)
              : -1;
          if (etxPos < 0) {
            this._chunkBuffer = chunk.subarray(stxPos);
            return;
          }
          etxPos += etxLen;
          this._pushChunk(chunk.subarray(stxPos, etxPos));
          this.flushBuffer();
        }
        return;
      }
      this._pushChunk(chunk);
    } finally {
      if (this._chunks.length && this._frameDelayMs)
        this._flushTimeout = setTimeout(
          () => this.flushBuffer(),
          this._frameDelayMs,
        ).unref();
      callback();
    }
  }

  protected _pushChunk(chunk: Buffer) {
    this._assertMaxBuffer(chunk.length);
    this._chunks.push(chunk);
    this._bufferSize += chunk.length;
  }

  protected _assertMaxBuffer(newChunkLen: number = 0) {
    if (
      this.maxBufferSize &&
      this._bufferSize + newChunkLen + (this._chunkBuffer?.length || 0) >
        this.maxBufferSize
    ) {
      this.emit('error', new Error('Max buffer size exceeded'));
    }
  }

  _flush(callback: TransformCallback) {
    if (this._flushTimeout) {
      clearTimeout(this._flushTimeout);
    }
    this.flushBuffer();
    callback();
  }

  reset() {
    this._chunks = [];
    this._chunkBuffer = undefined;
    if (this._flushTimeout) {
      clearTimeout(this._flushTimeout);
      this._flushTimeout = undefined;
    }
  }

  private flushBuffer() {
    if (this._chunkBuffer) {
      this._chunks.push(this._chunkBuffer);
      this._chunkBuffer = undefined;
    }
    /* c8 ignore next */
    if (this._chunks.length === 0) return;
    const combined =
      this._chunks.length === 1 ? this._chunks[0] : Buffer.concat(this._chunks);
    this._chunks = [];
    this._bufferSize = 0;
    if (this._customTransform) {
      this._customTransform(combined, 'buffer', (err, data) => {
        if (err) this.emit('error', err);
        else this.push(data);
      });
      return;
    }
    this.push(combined);
  }
}
