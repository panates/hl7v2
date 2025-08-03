import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const URD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'R/U date / time',
      len: 26,
    },
    '2': {
      desc: 'Report Priority',
    },
    '3': {
      desc: 'R/U Who Subject Definition',
    },
    '4': {
      desc: 'R/U What Subject Definition',
    },
    '5': {
      desc: 'R/U What Department Code',
    },
    '6': {
      desc: 'R/U display / print locations',
    },
    '7': {
      desc: 'R/U Results Level',
    },
  },
};
