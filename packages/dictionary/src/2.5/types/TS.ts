import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const TS: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'DTM',
      desc: 'Time',
      opt: 'R',
      len: 24,
    },
    '2': {
      type: 'ID',
      desc: 'Degree of Precision',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 529,
    },
  },
};
