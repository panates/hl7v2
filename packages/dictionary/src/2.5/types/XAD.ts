import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XAD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      len: 184,
    },
    '2': {
      len: 120,
    },
    '3': {
      len: 50,
    },
    '4': {
      desc: 'State or Province',
      len: 50,
    },
    '5': {
      desc: 'Zip or Postal Code',
      len: 12,
    },
    '6': {
      len: 3,
      table: 399,
    },
    '7': {
      len: 3,
      table: 190,
    },
    '8': {
      len: 50,
    },
    '9': {
      desc: 'County/Parish Code',
      len: 20,
      table: 289,
    },
    '10': {
      len: 20,
      table: 288,
    },
    '11': {
      type: 'ID',
      desc: 'Address Representation Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 465,
    },
    '12': {
      len: 53,
    },
    '13': {
      type: 'TS',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '14': {
      type: 'TS',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
