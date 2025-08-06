import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SPR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Stored Procedure Request Definition',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'ID',
      desc: 'Query/Response Format Code',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 106,
    },
    '3': {
      type: 'CE',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '4': {
      type: 'QIP',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
