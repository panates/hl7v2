import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XAD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '11': {
      type: 'ID',
      desc: 'Address Representation Code',
      opt: 'O',
      rep: 1,
    },
  },
};
