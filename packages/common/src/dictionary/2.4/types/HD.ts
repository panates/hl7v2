import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const HD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Hierarchic Designator',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Namespace ID',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Universal ID',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Universal ID Type',
      opt: 'O',
      rep: 1,
    },
  },
};
