import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PLN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      type: 'IS',
    },
    '3': {
      desc: 'State/other Qualifying Info',
    },
    '4': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
  },
};
