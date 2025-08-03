import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const EI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Entity Identifier',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Entity Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Namespace ID',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Universal ID',
      rep: 1,
    },
    '4': {
      type: 'ID',
      desc: 'Universal ID Type',
      rep: 1,
    },
  },
};
