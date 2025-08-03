import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const DLD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Discharge Location and Date',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Discharge Location',
      opt: 'R',
      rep: 1,
      len: 705,
      table: 113,
    },
    '2': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
  },
};
