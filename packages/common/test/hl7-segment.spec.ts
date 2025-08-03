import { expect } from 'expect';
import { HL7Message } from '../src/index.js';

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
    msg.header.field(7).value = new Date('2025-03-12T14:32:22');
    expect(msg.header.toHL7String()).toEqual(
      'MSH|^~\\&|||||20250312143222|||||2.7.1||||||UTF-8',
    );
  });
});
