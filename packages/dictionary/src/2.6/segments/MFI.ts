import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      rep: 'infinite',
      table: 361,
    },
    '4': {
      type: 'DTM',
      len: 24,
    },
    '5': {
      type: 'DTM',
      len: 24,
    },
  },
};
