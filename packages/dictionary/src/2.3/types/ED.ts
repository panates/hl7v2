import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const ED: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Encapsulated Data',
  fields: {
    '1': {
      type: 'HD',
      desc: 'Source Application',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Type Of Data',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Data Subtype',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      desc: 'Encoding',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Data',
      opt: 'O',
      rep: 1,
    },
  },
};
