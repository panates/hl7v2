import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const FN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Family Name',
  fields: {
    '1': {
      desc: 'Surname',
    },
    '2': {
      desc: 'Own Surname Prefix',
    },
    '3': {
      type: 'ST',
      desc: 'Own Surname',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Surname Prefix from Partner/Spouse',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Surname from Partner/Spouse',
      opt: 'O',
      rep: 1,
    },
  },
};
