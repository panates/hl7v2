import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CK: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      type: 'ST',
    },
    '3': {
      desc: 'Code Identifying The Check Digit Scheme Employed',
    },
    '4': {
      desc: 'Assigning Authority',
      opt: 'O',
      rep: 1,
    },
  },
};
