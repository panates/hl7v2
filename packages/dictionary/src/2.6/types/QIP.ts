import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const QIP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      opt: 'R',
      len: 12,
    },
    '2': {
      desc: 'Values',
      opt: 'R',
      len: 199,
    },
  },
};
