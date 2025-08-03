import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const FN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
  },
};
