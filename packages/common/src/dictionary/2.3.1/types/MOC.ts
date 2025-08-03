import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const MOC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Charge To Practise',
  fields: {
    '1': {
      type: 'MO',
      desc: 'Dollar Amount',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'Charge Code',
      opt: 'O',
      rep: 1,
    },
  },
};
