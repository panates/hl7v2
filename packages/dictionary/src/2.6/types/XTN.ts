import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XTN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
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
      len: 5,
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
    '13': {
      type: 'DTM',
      desc: 'Effective Start Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '14': {
      type: 'DTM',
      desc: 'Exiration Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '15': {
      type: 'CWE',
      desc: 'Exiration Reason',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 868,
    },
    '16': {
      type: 'CWE',
      desc: 'Protection Code',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 618,
    },
    '17': {
      type: 'EI',
      desc: 'Shared Telecommunication Identifier',
      opt: 'O',
      rep: 1,
      len: 427,
    },
    '18': {
      type: 'NM',
      desc: 'Preference Order',
      opt: 'O',
      rep: 1,
      len: 2,
    },
  },
};
