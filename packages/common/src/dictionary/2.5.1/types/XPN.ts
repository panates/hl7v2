import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XPN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Person Name',
  fields: {
    '1': {
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
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ID',
      desc: 'Name Type Code',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CE',
      desc: 'Name Context',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'DR',
      desc: 'Name Validity Range',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Name Assembly Order',
      opt: 'O',
      rep: 1,
    },
  },
};
