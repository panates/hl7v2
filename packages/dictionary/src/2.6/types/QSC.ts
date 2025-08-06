import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const QSC: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Segment Field Name',
      opt: 'R',
      len: 12,
    },
    '2': {
      len: 2,
      table: 209,
    },
    '3': {
      len: 199,
    },
    '4': {
      len: 3,
      table: 210,
    },
  },
};
