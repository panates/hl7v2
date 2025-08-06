import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XON: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite Name and Identification Number for Organizations',
  fields: {
    '2': {
      table: 204,
    },
    '4': {
      type: 'NM',
    },
    '5': {
      len: 3,
      table: 61,
    },
    '6': {
      table: 363,
    },
    '7': {
      type: 'ID',
      len: 5,
      table: 203,
    },
    '8': {
      desc: 'Assigning Facility',
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
    },
  },
};
