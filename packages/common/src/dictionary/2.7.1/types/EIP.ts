import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const EIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Entity Identifier Pair',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Placer Assigned Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Filler Assigned Identifier',
      opt: 'O',
      rep: 1,
    },
  },
};
