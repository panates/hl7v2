import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_MOC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Charge To Practise',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Dollar Amount',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Charge Code',
      opt: 'O',
      rep: 1,
    },
  },
};
