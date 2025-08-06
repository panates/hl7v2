import { expect } from 'expect';
import { hl7Escape } from '../src/index.js';

describe('hl7v2:hl7Escape', () => {
  it('Should escape field separator', () => {
    expect(hl7Escape('|')).toEqual('\\F\\');
  });

  it('Should escape component separator', () => {
    expect(hl7Escape('^')).toEqual('\\S\\');
  });

  it('Should escape sub component separator', () => {
    expect(hl7Escape('&')).toEqual('\\T\\');
  });

  it('Should escape repetition separator', () => {
    expect(hl7Escape('~')).toEqual('\\R\\');
  });

  it('Should escape escape character', () => {
    expect(hl7Escape('\\')).toEqual('\\E\\');
  });

  it('Should escape control characters', () => {
    expect(hl7Escape(String.fromCharCode(9))).toEqual('\\X09\\');
  });

  it('Should escape character', () => {
    expect(hl7Escape('\\')).toEqual('\\E\\');
  });

  it('Should escape null', () => {
    expect(hl7Escape(null)).toEqual('""');
  });
});
