import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const EIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Parent Order',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Parent s Placer Order Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Parent s Filler Order Number',
      opt: 'O',
      rep: 1,
    },
  },
};
