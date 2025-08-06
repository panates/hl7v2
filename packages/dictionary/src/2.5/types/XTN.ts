import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XTN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      len: 199,
    },
    '2': {
      len: 3,
      table: 201,
    },
    '3': {
      len: 8,
      table: 202,
    },
    '4': {
      len: 199,
    },
    '5': {
      len: 3,
    },
    '6': {
      desc: 'Area/City Code',
      len: 4,
    },
    '7': {
      desc: 'Local Number',
      len: 9,
    },
    '8': {
      len: 5,
    },
    '9': {
      len: 199,
    },
    '10': {
      type: 'ST',
      desc: 'Extension Prefix',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '11': {
      type: 'ST',
      desc: 'Speed Dial Code',
      opt: 'O',
      rep: 1,
      len: 6,
    },
    '12': {
      type: 'ST',
      desc: 'Unformatted Telephone number',
      opt: 'C',
      rep: 1,
      len: 199,
    },
  },
};
