import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const CER: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - CER',
    },
    '6': {
      desc: 'Signature ',
    },
    '12': {
      type: 'EI',
      opt: 'C',
    },
    '17': {
      len: 1,
    },
    '31': {
      desc: 'Certificate Status Code',
    },
  },
};
