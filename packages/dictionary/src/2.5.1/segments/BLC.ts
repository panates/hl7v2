import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const BLC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Blood Code',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Blood Product Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 426,
    },
    '2': {
      type: 'CQ',
      desc: 'Blood Amount',
      opt: 'O',
      rep: 1,
    },
  },
};
