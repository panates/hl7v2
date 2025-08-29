import { expect } from 'expect';
import { HL7Message } from '../src/index.js';

describe('hl7v2:Hl7SubComponent', () => {
  it('should assign typeDef from dictionary', () => {
    const msg = new HL7Message();
    const orc = msg.addSegment('ORC');
    orc.field(12).fromHL7String('NPI&9876543210&ISO');
    const subComponent = orc.field(12).subComponent(1, 1);
    expect(subComponent).toBeDefined();
    expect(subComponent.message).toBeDefined();
    expect(subComponent.message).toBe(msg);
    expect(subComponent.segment).toBe(orc);
    expect(subComponent.definition.type).toEqual('ST');
    expect(subComponent.typeDef.desc).toMatch('String Data');
  });

  it('should determine is sub component is empty or not', () => {
    const msg = new HL7Message();
    const orc = msg.addSegment('ORC');
    orc.field(12).fromHL7String('NPI&9876543210&ISO');
    const subComponent = orc.field(12).subComponent(1, 1);
    expect(subComponent).toBeDefined();
    expect(subComponent.isEmpty()).toEqual(false);
    subComponent.value = null;
    expect(subComponent.isEmpty()).toEqual(true);
  });
});
