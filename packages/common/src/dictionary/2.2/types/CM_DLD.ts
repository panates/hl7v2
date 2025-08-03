import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_DLD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Discharge Location',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Discharge Location',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
  },
};
