import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XON: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite Name And Identification Number For Organizations',
  fields: {
    '9': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
    },
  },
};
