import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XON: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite Name and Identification Number for Organizations',
  fields: {
    '1': {
      len: 50,
    },
    '2': {
      len: 20,
      table: 204,
    },
    '3': {
      len: 4,
    },
    '4': {
      type: 'NM',
      len: 1,
    },
    '5': {
      desc: 'Check Digit Scheme',
      len: 3,
      table: 61,
    },
    '6': {
      len: 227,
      table: 363,
    },
    '7': {
      type: 'ID',
      len: 5,
      table: 203,
    },
    '8': {
      desc: 'Assigning Facility',
      len: 227,
    },
    '9': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 465,
    },
    '10': {
      type: 'ST',
      desc: 'Organization Identifier',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
