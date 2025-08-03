import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PRL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Parent Result Link',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Parent Observation Identifier',
      opt: 'R',
      rep: 1,
      len: 483,
    },
    '2': {
      type: 'ST',
      desc: 'Parent Observation Sub-identifier',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'TX',
      desc: 'Parent Observation Value Descriptor',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
