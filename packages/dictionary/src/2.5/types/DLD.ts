import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DLD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Discharge Location and Date',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Discharge Location',
      opt: 'R',
      rep: 1,
      len: 20,
      table: 113,
    },
    '2': {
      type: 'TS',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
