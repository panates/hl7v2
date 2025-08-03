import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_SPD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Specialty',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Specialty Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Governing Board',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Eligible Or Certified',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DT',
      desc: 'Date Of Certification',
      opt: 'O',
      rep: 1,
    },
  },
};
