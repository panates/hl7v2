import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite Price',
  fields: {
    '2': {
      table: 205,
    },
    '6': {
      table: 298,
    },
  },
};
