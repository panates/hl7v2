import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const OSP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Occurence Span',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Occurrence Span Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'DT',
      desc: 'Occurrence Span Start Date',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'DT',
      desc: 'Occurrence Span Stop Date',
      opt: 'O',
      rep: 1,
    },
  },
};
