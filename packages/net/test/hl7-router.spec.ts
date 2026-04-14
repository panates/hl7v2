import { expect } from 'expect';
import { HL7Router } from '../src/index.js';

describe('net:router', () => {
  it('should add multiple handlers', async () => {
    const router = new HL7Router();
    router.use(() => 1, 0);
    router.use(() => 2, 0);
    expect((router as any)._handlerStack).toBeInstanceOf(Map);
    expect((router as any)._handlerStack.get(0)).toBeInstanceOf(Array);
    expect((router as any)._handlerStack.get(0).length).toBe(2);
  });
});
