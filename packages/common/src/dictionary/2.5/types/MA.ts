import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const MA: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 16,
    },
    '2': {
      len: 16,
    },
    '3': {
      desc: 'Sample 1 From Channel N',
      len: 16,
    },
    '4': {
      desc: 'Sample 2 From Channel 1',
      len: 16,
    },
    '5': {
      desc: 'Sample 2 From Channel N',
      len: 16,
    },
    '6': {
      desc: 'Sample N From Channel N',
      len: 16,
    },
  },
};
