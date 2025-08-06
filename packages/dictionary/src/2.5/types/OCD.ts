import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const OCD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Occurrence Code and Date',
  fields: {
    '1': {
      type: 'CNE',
      desc: 'Occurrence Code',
      opt: 'R',
      rep: 1,
      len: 705,
      table: 350,
    },
    '2': {
      type: 'DT',
      desc: 'Occurrence Date',
      opt: 'R',
      rep: 1,
      len: 8,
    },
  },
};
