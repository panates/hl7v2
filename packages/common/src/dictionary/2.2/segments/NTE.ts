import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NTE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - Notes and Comments',
    },
    '2': {
      desc: 'Source of Comment',
    },
    '3': {
      type: 'FT',
      opt: 'O',
      len: 65536,
    },
  },
};
