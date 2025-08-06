import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LRL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LRL',
      len: 200,
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      rep: 'infinite',
    },
  },
};
