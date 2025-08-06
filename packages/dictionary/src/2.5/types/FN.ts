import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const FN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 50,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      len: 50,
    },
    '4': {
      desc: 'Surname Prefix From Partner/Spouse',
      len: 20,
    },
    '5': {
      desc: 'Surname From Partner/Spouse',
      len: 50,
    },
  },
};
