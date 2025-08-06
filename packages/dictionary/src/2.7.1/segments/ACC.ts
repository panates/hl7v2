import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ACC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'DTM',
    },
    '2': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      len: 1,
    },
    '11': {
      type: 'XAD',
      desc: 'Accident Address',
      opt: 'O',
      rep: 1,
    },
  },
};
