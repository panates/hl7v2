import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CN_PERSON: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Person',
  fields: {
    '1': {
      type: 'ID',
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
      desc: 'Middle Initial Or Name',
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
      type: 'ST',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ID',
      desc: 'Source Table Id',
      opt: 'O',
      rep: 1,
    },
  },
};
