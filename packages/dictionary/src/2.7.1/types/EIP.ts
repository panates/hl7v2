import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

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
