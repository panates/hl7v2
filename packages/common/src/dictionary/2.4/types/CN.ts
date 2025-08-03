import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite ID Number And Name',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'FN',
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
      desc: 'Second And Further Given Names Or Initials Thereof',
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
