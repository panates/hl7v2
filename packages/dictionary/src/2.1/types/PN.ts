import type { HL7DataTypeDefinition } from '../../types.js';

export const PN: HL7DataTypeDefinition = {
  desc: 'Person Name',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Family Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Given Name',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Middle Initial Or Name',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Suffix',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Prefix',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
  },
};
