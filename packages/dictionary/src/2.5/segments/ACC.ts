import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ACC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      len: 26,
    },
    '2': {
      type: 'CE',
    },
    '5': {
      len: 1,
    },
    '6': {
      len: 12,
    },
    '11': {
      type: 'XAD',
      desc: 'Accident Address',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
