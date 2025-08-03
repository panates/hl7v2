import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PL: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'IS',
      desc: 'Point of Care',
      len: 20,
      table: 302,
    },
    '2': {
      len: 20,
      table: 303,
    },
    '3': {
      len: 20,
      table: 304,
    },
    '4': {
      len: 227,
    },
    '5': {
      len: 20,
      table: 306,
    },
    '6': {
      opt: 'C',
      len: 20,
      table: 305,
    },
    '7': {
      len: 20,
      table: 307,
    },
    '8': {
      type: 'IS',
      len: 20,
      table: 308,
    },
    '9': {
      desc: 'Location Description',
      len: 199,
    },
    '10': {
      type: 'EI',
      desc: 'Comprehensive Location Identifier',
      opt: 'O',
      rep: 1,
      len: 427,
    },
    '11': {
      type: 'HD',
      desc: 'Assigning Authority for Location',
      opt: 'O',
      rep: 1,
      len: 227,
    },
  },
};
