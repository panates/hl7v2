import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CQ: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite Quantity with Units',
  fields: {
    '2': {
      type: 'CWE',
    },
  },
};
