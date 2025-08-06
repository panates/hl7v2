import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const MSG: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Message Type',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Message Code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 76,
    },
    '2': {
      type: 'ID',
      desc: 'Trigger Event',
      rep: 1,
      len: 3,
      table: 3,
    },
    '3': {
      type: 'ID',
      desc: 'Message Structure',
      rep: 1,
      len: 7,
      table: 354,
    },
  },
};
