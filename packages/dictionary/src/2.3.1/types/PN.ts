import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Person Name',
  fields: {
    '1': {
      type: 'FN',
      desc: 'Family+last Name',
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
      type: 'IS',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
  },
};
