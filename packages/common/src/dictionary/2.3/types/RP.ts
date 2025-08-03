import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const RP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Reference Pointer',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Pointer',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'HD',
      desc: 'Application ID',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Type Of Data',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      desc: 'Subtype',
      opt: 'O',
      rep: 1,
    },
  },
};
