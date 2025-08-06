import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PEN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
      desc: 'Penalty Type',
    },
  },
};
