import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Error',
  fields: {
    '1': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '4': {
      len: 1,
    },
    '6': {
      rep: 10,
    },
    '9': {
      type: 'CWE',
    },
  },
};
