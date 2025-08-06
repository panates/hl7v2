import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const MOC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Money and Code',
  fields: {
    '1': {
      type: 'MO',
      desc: 'Monetary Amount',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'CWE',
      desc: 'Charge Code',
      opt: 'O',
      rep: 1,
      len: 705,
    },
  },
};
