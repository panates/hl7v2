import { expect } from 'expect';
import { HL7Message, HL7Version } from '../src/index.js';

describe('hl7v2:HL7Message', () => {
  it('should create HL7Message with given version', () => {
    let msg = new HL7Message();
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual(HL7Version.v2_7_1);
    expect(msg.version).toEqual(HL7Version.v2_7_1);
    expect(msg.header.field(12).value).toEqual('2.7.1');

    msg = new HL7Message(HL7Version.v2_5_1);
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual(HL7Version.v2_5_1);
    expect(msg.dictionary.version).toEqual(HL7Version.v2_5_1);
    expect(msg.header.field(12).value).toEqual('2.5.1');
  });

  it('should create HL7Message with given nearest version when given version not found', () => {
    const msg = new HL7Message('2.9');
    expect(msg.header).toBeDefined();
    expect(msg.version).toEqual('2.9');
    expect(msg.header.field(12).value).toEqual('2.9');
    expect(msg.dictionary.version).toEqual(HL7Version.v2_8);
  });

  it('should add segment', () => {
    const msg = new HL7Message(HL7Version.v2_8);
    msg.addSegment('PID');
    expect(msg.segments.length).toEqual(2);
    expect(msg.segments[0].segmentType).toEqual('MSH');
    expect(msg.segments[1].segmentType).toEqual('PID');
  });

  it('should get segment by segment type and index', () => {
    const msg = new HL7Message(HL7Version.v2_8);
    msg.addSegment('PID');
    const obr1 = msg.addSegment('OBR');
    const obr2 = msg.addSegment('OBR');
    expect(msg.getSegment('OBR')).toBe(obr1);
    expect(msg.getSegment('OBR', 0)).toBe(obr1);
    expect(msg.getSegment('OBR', 1)).toBe(obr2);
  });

  it('should convert to HL7 string', () => {
    const msg = new HL7Message();
    msg.header.field(7).value = new Date('2025-03-12T14:32:22');
    expect(msg.toHL7String()).toEqual(
      'MSH|^~\\&|||||20250312143222|||||2.7.1||||||UTF-8\r',
    );
  });
});
