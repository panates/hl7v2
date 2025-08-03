import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DLN: DeepPartial<HL7DataTypeDefinition> = {
  desc: "Driver's License Number",
  fields: {
    '1': {
      type: 'ST',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Issuing State, Province, Country',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
  },
};
