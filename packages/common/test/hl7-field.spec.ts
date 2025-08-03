import { expect } from 'expect';
import { HL7Message } from '../src/index.js';

describe('hl7v2:HL7Field', () => {
  it('should assign typeDef from dictionary', () => {
    const msg = new HL7Message();
    expect(msg.header).toBeDefined();
    expect(msg.header.field(7).typeDef).toBeDefined();
    expect(msg.header.field(7).typeDef.desc).toEqual('Date/Time');
  });

  it('should assign fieldDef from dictionary', () => {
    const msg = new HL7Message();
    expect(msg.header).toBeDefined();
    expect(msg.header.field(7).definition).toBeDefined();
    expect(msg.header.field(7).definition.type).toEqual('DTM');
    expect(msg.header.field(7).definition.desc).toEqual('Date/Time of Message');
  });

  it('should set value (primitive)', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const idField = pid.field(2);
    idField.value = '12345';
    expect(idField.value).toEqual('12345');
  });

  it('should set value (non-primitive)', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const nameField = pid.field(5);
    nameField.value = 'Wick';
    expect(nameField.repetitions.length).toEqual(1);
    expect(nameField.repetitions[0].components?.length).toEqual(1);
    expect(nameField.value).toEqual('Wick');
    expect(nameField.repetitions[0].components![0].value).toEqual('Wick');
    expect(nameField.value).toEqual('Wick');
  });

  it('should fromHL7String set value (primitive)', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const idField = pid.field(2);
    idField.fromHL7String('12345');
    expect(idField.value).toEqual('12345');
  });

  it('should fromHL7String set value (non-primitive)', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const nameField = pid.field(5);
    nameField.fromHL7String('Wick^John');
    expect(nameField.repetitions.length).toEqual(1);
    expect(nameField.repetitions[0].components?.length).toEqual(2);
    expect(nameField.value).toEqual('Wick');
    expect(nameField.toHL7String()).toEqual('Wick^John');
  });

  it('should fromHL7String unescape hl7 characters (primitive)', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const idField = pid.field(2);
    idField.fromHL7String('\\F\\');
    expect(idField.value).toEqual('|');
    idField.fromHL7String('\\S\\');
    expect(idField.value).toEqual('^');
    idField.fromHL7String('\\T\\');
    expect(idField.value).toEqual('&');
    idField.fromHL7String('\\R\\');
    expect(idField.value).toEqual('~');
    idField.fromHL7String('\\E\\');
    expect(idField.value).toEqual('\\');
    idField.fromHL7String('\\X0D\\');
    expect(idField.value).toEqual(Buffer.from([0x0d]));
    idField.fromHL7String('\\A\\');
    expect(idField.value).toEqual('A');
  });

  it('should fromHL7String unescape hl7 characters (non primitive)', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const idField = pid.field(2);
    idField.fromHL7String('\\F\\');
    expect(idField.value).toEqual('|');
  });

  it('should escape hl7 characters', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const idField = pid.field(2);
    idField.value = '|';
    expect(idField.toHL7String()).toEqual('\\F\\');
    idField.value = '^';
    expect(idField.toHL7String()).toEqual('\\S\\');
    idField.value = '&';
    expect(idField.toHL7String()).toEqual('\\T\\');
    idField.value = '~';
    expect(idField.toHL7String()).toEqual('\\R\\');
    idField.value = '\\';
    expect(idField.toHL7String()).toEqual('\\E\\');
    idField.value = '\r';
    expect(idField.toHL7String()).toEqual('\\X0D\\');
    idField.value = String.fromCharCode(0x16);
    expect(idField.toHL7String()).toEqual('\\X16\\');
  });

  it('should toHL7String return hl7 serialized string', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const nameField = pid.field(5);
    nameField.fromHL7String('Wick^John~Blame^Terry');
    expect(nameField.toHL7String()).toEqual('Wick^John~Blame^Terry');
  });

  it('should toHL7String(repeatIndex) return hl7 serialized string', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const nameField = pid.field(5);
    nameField.fromHL7String('Wick^John~Blame^Terry');
    expect(nameField.repetition(0).toHL7String()).toEqual('Wick^John');
  });

  it('should toHL7String(component) return hl7 serialized string', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const nameField = pid.field(5);
    nameField.fromHL7String('Wick^John~Blame^Terry');
    expect(nameField.repetition(0).toHL7String()).toEqual('Wick^John');
    expect(nameField.repetition(1).toHL7String()).toEqual('Blame^Terry');
  });

  it('should valueFrom() return value from given args', () => {
    const msg = new HL7Message();
    const pid = msg.addSegment('PID');
    const nameField = pid.field(5);
    nameField.fromHL7String('Wick^John~Blame^Terry');
    expect(nameField.valueOf(1)).toEqual('Wick');
    expect(nameField.valueOf(2)).toEqual('John');
    expect(nameField.repetition(1).valueOf(1)).toEqual('Blame');
    expect(nameField.repetition(1).valueOf(2)).toEqual('Terry');
  });
});
