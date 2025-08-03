import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CNS: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite ID Number And Name Simplified',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
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
      desc: 'Second And Further Given Names Or Initials Thereof',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Suffix',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Prefix',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'IS',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      desc: 'Source Table',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'IS',
      desc: 'Assigning Authority Namespace ID',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Assigning Authority Universal ID',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Assigning Authority Universal ID Type',
      opt: 'O',
      rep: 1,
    },
  },
};
