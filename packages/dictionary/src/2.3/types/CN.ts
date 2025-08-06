import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite ID Number And Name',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Family Name',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Given Name',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Middle Initial Or Name',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Source Table',
    },
    '9': {
      type: 'HD',
      desc: 'Assigning Authority',
    },
  },
};
