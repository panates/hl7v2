import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XPN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Person Name',
  fields: {
    '1': {
      desc: 'Family Name',
      opt: 'C',
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
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Suffix (e.g., JR or III)',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Prefix (e.g., DR)',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Degree (e.g., MD)',
      opt: 'B',
      rep: 1,
    },
    '7': {
      type: 'ID',
      desc: 'Name Type Code',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '8': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Name Context',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Name Validity Range',
      opt: 'B',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Name Assembly Order',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'Called By',
      opt: 'O',
      rep: 1,
    },
  },
};
