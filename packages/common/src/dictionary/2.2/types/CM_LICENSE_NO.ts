import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_LICENSE_NO: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'License Number',
  fields: {
    '1': {
      type: 'ST',
      desc: 'License Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Issuing State,province,country',
      opt: 'O',
      rep: 1,
    },
  },
};
