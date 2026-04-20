import EventEmitter from 'node:events';
import { expect } from 'expect';
import { HL7Message } from 'hl7v2';
import { HL7Request, HL7Response, HL7Router } from '../src/index.js';

describe('net:router', () => {
  it('should add multiple handlers', async () => {
    const router = new HL7Router();
    router.use(() => 1, 0);
    router.use(() => 2, 0);
    expect((router as any)._handlerStack).toBeInstanceOf(Map);
    expect((router as any)._handlerStack.get(0)).toBeInstanceOf(Array);
    expect((router as any)._handlerStack.get(0).length).toBe(2);
  });

  it('should stop processing next handlers after error', async () => {
    const router = new HL7Router();
    let step = 0;
    router.use(() => {
      ++step;
    });
    router.use(() => {
      throw new Error('break processing');
    });
    router.use(() => {
      ++step;
    });

    const req = new HL7Request(new EventEmitter() as any, new HL7Message());
    const res = new HL7Response(req);
    await new Promise<void>(resolve => {
      router.handle(req, res, () => {
        resolve();
      });
    });
    expect(res.error).toBeDefined();
    expect(step).toBe(1);
  });

  it('should call error handlers on error', async () => {
    const router = new HL7Router();
    let errStep = 0;
    router.onError(() => {
      ++errStep;
    });
    router.use(() => {
      throw new Error('break processing');
    });
    router.onError(() => {
      ++errStep;
    });

    const req = new HL7Request(new EventEmitter() as any, new HL7Message());
    const res = new HL7Response(req);
    await new Promise<void>(resolve => {
      router.handle(req, res, () => {
        resolve();
      });
    });
    expect(res.error).toBeDefined();
    expect(errStep).toBe(2);
  });
});
