import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const BLG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Billing',
  fields: {
    '1': {
      opt: 'O',
      rep: 1,
      table: 100,
    },
    '2': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 122,
    },
    '3': {
      opt: 'O',
      rep: 1,
    },
  },
};
