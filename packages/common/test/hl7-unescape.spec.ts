import { expect } from 'expect';
import { hl7UnEscape } from '../src/index.js';

describe('hl7v2:hl7UnEscape', () => {
  it('Should un escape field separator', () => {
    expect(hl7UnEscape('\\F\\')).toEqual('|');
  });

  it('Should component separator', () => {
    expect(hl7UnEscape('\\S\\')).toEqual('^');
  });

  it('Should sub component separator', () => {
    expect(hl7UnEscape('\\T\\')).toEqual('&');
  });

  it('Should repetition separator', () => {
    expect(hl7UnEscape('\\R\\')).toEqual('~');
  });

  it('Should escape character', () => {
    expect(hl7UnEscape('\\E\\')).toEqual('\\');
  });

  it('Should escape control characters', () => {
    expect(hl7UnEscape('\\X09\\')).toEqual(Buffer.from([9]));
  });

  it('Should escape character', () => {
    expect(hl7UnEscape('\\E\\')).toEqual('\\');
  });

  it('Should escape null', () => {
    expect(hl7UnEscape('""')).toEqual(null);
  });
});
