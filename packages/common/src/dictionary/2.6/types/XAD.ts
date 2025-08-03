import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

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
      len: 49,
    },
    '13': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '14': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '15': {
      type: 'CWE',
      desc: 'Expiration Reason',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 616,
    },
    '16': {
      type: 'ID',
      desc: 'Temporary Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '17': {
      type: 'ID',
      desc: 'Bad Address Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '18': {
      type: 'ID',
      desc: 'Address Usage',
      opt: 'O',
      rep: 1,
      len: 44,
      table: 617,
    },
    '19': {
      type: 'ST',
      desc: 'Addressee',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '20': {
      type: 'ST',
      desc: 'Comment',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '21': {
      type: 'NM',
      desc: 'Preference Order',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '22': {
      type: 'CWE',
      desc: 'Protection Code',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 618,
    },
    '23': {
      type: 'EI',
      desc: 'Address Identifier',
      opt: 'O',
      rep: 1,
      len: 427,
    },
  },
};
