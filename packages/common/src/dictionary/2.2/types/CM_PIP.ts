import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_PIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Privileges',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Privilege',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'Privilege Class',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DT',
      desc: 'Activation Date',
      opt: 'O',
      rep: 1,
    },
  },
};
