import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DLD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      opt: 'R',
      rep: 1,
      table: 113,
    },
    '2': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
  },
};
