import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SPR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Stored Procedure Request Definition',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Query tag',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'ID',
      desc: 'Query/ Response Format Code',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 106,
    },
    '3': {
      type: 'CE',
      desc: 'Stored procedure name',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'QIP',
      desc: 'Input parameter list',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
