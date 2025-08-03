import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_PLN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Practitioner ID Numbers',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Type Of ID Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'State/other Qualifiying Info',
      opt: 'O',
      rep: 1,
    },
  },
};
