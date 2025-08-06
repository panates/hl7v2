import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LCH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LCH',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
  },
};
