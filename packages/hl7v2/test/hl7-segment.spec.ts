import { expect } from 'expect';
import { HL7Message } from '../src/index.js';

/** The local time zone offset of a Date, as HL7 writes it: +0300 */
const offsetOf = (d: Date) => {
  const m = -d.getTimezoneOffset();
  const a = Math.abs(m);
  return (
    (m < 0 ? '-' : '+') +
    String(Math.floor(a / 60)).padStart(2, '0') +
    String(a % 60).padStart(2, '0')
  );
};

describe('hl7v2:HL7Segment', () => {
  it('should assign segmentDef from dictionary', () => {
    const msg = new HL7Message();
    expect(msg.header).toBeDefined();
    expect(msg.header.definition).toBeDefined();
    expect(msg.header.definition.desc).toEqual('Message Header');
  });

  it('should get field by position', () => {
    const msg = new HL7Message();
    expect(msg.header).toBeDefined();
    expect(msg.header.field(7)).toBeDefined();
    expect(msg.header.field(7).definition.type).toEqual('DTM');
  });

  it('should define custom field', () => {
    const msg = new HL7Message();
    msg.header.defineField(26, { type: 'NM' });
    expect(msg.header.field(26)).toBeDefined();
    expect(msg.header.field(26).definition.type).toEqual('NM');
  });

  it('should convert to HL7 string', () => {
    const msg = new HL7Message();
    const date = new Date('2025-03-12T14:32:22');
    msg.header.field(7).setValue(date);
    const controlId = msg.header.field(10).getValue();
    expect(msg.header.toHL7String()).toEqual(
      `MSH|^~\\&|||||20250312143222${offsetOf(date)}|||${controlId}|P|2.7.1||||||UNICODE UTF-8`,
    );
  });
});
