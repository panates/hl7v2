import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

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
