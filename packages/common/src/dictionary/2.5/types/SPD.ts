import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const SPD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Specialty Description',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Specialty Name',
      opt: 'R',
      rep: 1,
      len: 50,
    },
    '2': {
      type: 'ST',
      desc: 'Governing Board',
      opt: 'O',
      rep: 1,
      len: 50,
    },
    '3': {
      type: 'ID',
      desc: 'Eligible or Certified',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 337,
    },
    '4': {
      type: 'DT',
      desc: 'Date of Certification',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
