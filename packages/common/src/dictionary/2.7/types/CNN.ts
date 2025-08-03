import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CNN: DeepPartial<HL7DataTypeDefinition> = {
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
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Suffix (e.g., JR or III)',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Prefix (e.g., DR)',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'IS',
      desc: 'Degree (e.g., MD)',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      desc: 'Source Table',
      rep: 1,
    },
    '9': {
      type: 'IS',
      rep: 1,
    },
    '10': {
      type: 'ST',
      rep: 1,
    },
    '11': {
      type: 'ID',
      rep: 1,
    },
  },
};
