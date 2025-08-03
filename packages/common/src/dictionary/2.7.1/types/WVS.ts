import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const WVS: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      desc: 'Source One Name',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Source Two Name',
      opt: 'O',
      rep: 1,
    },
  },
};
