import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
    },
    '5': {
      type: 'DTM',
    },
  },
};
