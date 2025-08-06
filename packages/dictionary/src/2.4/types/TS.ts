import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const TS: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Time Stamp',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Time Of An Event',
      opt: 'O',
      rep: 1,
    },
  },
};
