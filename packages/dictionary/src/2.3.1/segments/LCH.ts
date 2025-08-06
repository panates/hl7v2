import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LCH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location characteristic segment',
  fields: {
    '1': {
      desc: 'Primary Key Value - LCH',
      len: 200,
    },
    '5': {
      opt: 'O',
    },
  },
};
