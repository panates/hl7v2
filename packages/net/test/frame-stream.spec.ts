import { expect } from 'expect';
import { FrameStream } from '../src/helpers/frame-stream.js';

const stx = String.fromCharCode(0x02);
const etx = String.fromCharCode(0x03);

describe('FrameStream', () => {
  it('should create', async () => {
    const frameStream = new FrameStream();
    expect(frameStream).toBeDefined();
  });

  it('should split frames by "frameEnd"', done => {
    const frameStream = new FrameStream({ frameEnd: '\n' }); // Assume '\n' is the frame delimiter
    const input = 'frame1\nframe2\nframe3\nframe4\n'; // Example input
    const expectedFrames = ['frame1\n', 'frame2\n', 'frame3\n', 'frame4\n']; // Expected output frames
    const frames: string[] = [];

    frameStream.on('data', data => {
      frames.push(data.toString());
    });

    frameStream.on('end', () => {
      expect(frames).toEqual(expectedFrames);
      done();
    });

    frameStream.write(input);
    frameStream.end();
  });

  it('should handle split chunks by "frameEnd" correctly across frames', done => {
    const frameStream = new FrameStream({ frameEnd: '\n' });
    const inputChunks = ['frame1\nfra', 'me2\nframe', '3\nframe4\n'];
    const expectedFrames = ['frame1\n', 'frame2\n', 'frame3\n', 'frame4\n'];
    const frames: string[] = [];

    frameStream.on('data', data => {
      frames.push(data.toString());
    });

    frameStream.on('end', () => {
      expect(frames).toEqual(expectedFrames);
      done();
    });

    inputChunks.forEach(chunk => frameStream.write(chunk));
    frameStream.end();
  });

  it('should handle split chunks by "frameStart" and "frameEnd" correctly across frames', done => {
    const frameStream = new FrameStream({ frameStart: stx, frameEnd: etx });
    const inputChunks = [
      `${stx}frame1${etx}${stx}fra`,
      `me2${etx}${stx}frame`,
      `3${etx}${stx}frame4${etx}`,
    ];
    const expectedFrames = [
      `${stx}frame1${etx}`,
      `${stx}frame2${etx}`,
      `${stx}frame3${etx}`,
      `${stx}frame4${etx}`,
    ];
    const frames: string[] = [];

    frameStream.on('data', data => {
      frames.push(data.toString());
    });

    frameStream.on('end', () => {
      expect(frames).toEqual(expectedFrames);
      done();
    });

    inputChunks.forEach(chunk => frameStream.write(chunk));
    frameStream.end();
  });

  it('should emit partial frame if stream ends without a delimiter and delayMs defined', done => {
    const frameStream = new FrameStream({ frameEnd: '\n', frameDelayMs: 50 });
    const input = 'frame1\nframe2\nframe3_partial';
    const expectedFrames = ['frame1\n', 'frame2\n', 'frame3_partial'];
    const frames: string[] = [];

    frameStream.on('data', data => {
      frames.push(data.toString());
    });

    frameStream.on('end', () => {
      expect(frames).toEqual(expectedFrames);
      done();
    });

    frameStream.write(input);
    frameStream.end();
  });

  it('should extract frames starting with frameStart', done => {
    const frameStart = '<START>'; // Define frameStart delimiter
    const frameStream = new FrameStream({ frameStart });
    const input = 'garbage_data<START>frame1<START>frame2<START>frame3';
    const expectedFrames = ['<START>frame1', '<START>frame2', '<START>frame3'];
    const frames: string[] = [];

    frameStream.on('data', data => {
      frames.push(data.toString());
    });

    frameStream.on('end', () => {
      expect(frames).toEqual(expectedFrames);
      done();
    });

    frameStream.write(input);
    frameStream.end();
  });

  it('should extract frames starting with frameStart', done => {
    const frameStart = '<START>'; // Define frameStart delimiter
    const frameEnd = '<END>'; // Define frameStart delimiter
    const frameStream = new FrameStream({
      frameStart,
      frameEnd,
      frameDelayMs: 50,
    });
    const input =
      'garbage_data<START>frame1<END>garbage<START>frame2<END><START>frame3';
    const expectedFrames = [
      '<START>frame1<END>',
      '<START>frame2<END>',
      '<START>frame3',
    ];
    const frames: string[] = [];

    frameStream.on('data', data => {
      frames.push(data.toString());
    });

    frameStream.on('end', () => {
      expect(frames).toEqual(expectedFrames);
      done();
    });

    frameStream.write(input);
    frameStream.end();
  });

  it('should limit max buffer size', done => {
    const frameStream = new FrameStream({ maxBufferSize: 10 }); // Assume '\n' is the frame delimiter
    const inputChunks = ['12345', '67', '89101'];
    let error;
    let errorCount = 0;
    frameStream.on('error', err => {
      errorCount++;
      error = err;
    });
    inputChunks.forEach(chunk => frameStream.write(chunk));
    frameStream.end();
    expect(errorCount).toEqual(1);
    expect(error).toBeDefined();
    expect(error.message).toEqual('Max buffer size exceeded');
    done();
  });
});
