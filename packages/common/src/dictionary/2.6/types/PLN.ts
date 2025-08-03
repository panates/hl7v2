import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PLN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Practitioner License or Other ID Number',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'IS',
      desc: 'Type of ID Number',
      opt: 'R',
      rep: 1,
      len: 8,
      table: 338,
    },
    '3': {
      type: 'ST',
      desc: 'State/other Qualifying Information',
      opt: 'O',
      rep: 1,
      len: 62,
    },
    '4': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
