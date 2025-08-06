import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const MSG: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Message Type',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Message Type',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Trigger Event',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Message Structure',
      opt: 'O',
      rep: 1,
    },
  },
};
