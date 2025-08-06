import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CCD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Charge Code and Date',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Invocation Event',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 100,
    },
    '2': {
      type: 'DTM',
      desc: 'Date/time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
  },
};
