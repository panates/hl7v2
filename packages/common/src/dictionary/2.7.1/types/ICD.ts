import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const ICD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Insurance Certification Definition',
  fields: {
    '1': {
      desc: 'Certification Patient Type',
      opt: 'O',
      rep: 1,
      table: 150,
    },
    '2': {
      type: 'ID',
      desc: 'Certification Required',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 136,
    },
    '3': {
      type: 'DTM',
      desc: 'Date/Time Certification Required',
      opt: 'O',
      rep: 1,
    },
  },
};
