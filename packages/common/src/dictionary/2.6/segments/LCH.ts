import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LCH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LCH',
      len: 200,
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
      table: 136,
    },
  },
};
