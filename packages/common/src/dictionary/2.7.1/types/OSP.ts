import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const OSP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Occurrence Span Code and Date',
  fields: {
    '1': {
      type: 'CNE',
      desc: 'Occurrence Span Code',
      opt: 'R',
      rep: 1,
      table: 351,
    },
    '2': {
      type: 'DT',
      desc: 'Occurrence Span Start Date',
      opt: 'C',
      rep: 1,
    },
    '3': {
      type: 'DT',
      desc: 'Occurrence Span Stop Date',
      opt: 'C',
      rep: 1,
    },
  },
};
