import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PLN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Practitioner ID Numbers',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Type Of ID Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'State/other Qualifying Info',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
  },
};
