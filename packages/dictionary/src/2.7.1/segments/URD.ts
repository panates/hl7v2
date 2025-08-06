import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const URD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'DTM',
    },
    '2': {
      desc: 'Report Priority',
    },
    '3': {
      desc: 'R/U Who Subject Definition',
    },
    '4': {
      type: 'CWE',
      desc: 'R/U What Subject Definition',
    },
    '5': {
      type: 'CWE',
      desc: 'R/U What Department Code',
    },
    '7': {
      desc: 'R/U Results Level',
    },
  },
};
