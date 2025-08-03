import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PL: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Point of Care',
      table: 302,
    },
    '2': {
      table: 303,
    },
    '3': {
      table: 304,
    },
    '5': {
      table: 306,
    },
    '6': {
      table: 305,
    },
    '7': {
      table: 307,
    },
    '8': {
      table: 308,
    },
    '9': {
      desc: 'Location Description',
    },
    '10': {
      type: 'EI',
      desc: 'Comprehensive Location Identifier',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'HD',
      desc: 'Assigning Authority for Location',
      opt: 'O',
      rep: 1,
    },
  },
};
