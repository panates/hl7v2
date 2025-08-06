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
    '6': {
      desc: 'Area/City Code',
    },
    '7': {
      desc: 'Local Number',
    },
    '10': {
      type: 'ST',
      desc: 'Extension Prefix',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Speed Dial Code',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      opt: 'C',
      rep: 1,
    },
    '13': {
      type: 'DTM',
      desc: 'Effective Start Date',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 868,
    },
    '16': {
      type: 'CWE',
      desc: 'Protection Code',
      opt: 'O',
      rep: 1,
      table: 618,
    },
    '17': {
      type: 'EI',
      desc: 'Shared Telecommunication Identifier',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'NM',
      desc: 'Preference Order',
      opt: 'O',
      rep: 1,
    },
  },
};
