import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_EIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Parent Order',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Parent s Placer Order Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Parent s Filler Order Number',
      opt: 'O',
      rep: 1,
    },
  },
};
