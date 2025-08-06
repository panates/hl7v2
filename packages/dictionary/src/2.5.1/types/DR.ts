import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DR: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'TS',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      opt: 'O',
      rep: 1,
    },
  },
};
