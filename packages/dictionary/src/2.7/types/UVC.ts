import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const UVC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '3': {
      type: 'NM',
      desc: 'Non-Monetary Value Amount / Quantity',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Non-Monetary Value Amount / Units ',
      opt: 'O',
      rep: 1,
    },
  },
};
