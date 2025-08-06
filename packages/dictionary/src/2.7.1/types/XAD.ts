import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XAD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '4': {
      desc: 'State or Province',
    },
    '5': {
      desc: 'Zip or Postal Code',
    },
    '6': {
      len: 3,
      table: 399,
    },
    '7': {
      len: 3,
      table: 190,
    },
    '9': {
      desc: 'County/Parish Code',
      table: 289,
    },
    '10': {
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
    '13': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'CWE',
      desc: 'Expiration Reason',
      opt: 'O',
      rep: 1,
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
      table: 617,
    },
    '19': {
      type: 'ST',
      desc: 'Addressee',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'ST',
      desc: 'Comment',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'NM',
      desc: 'Preference Order',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'CWE',
      desc: 'Protection Code',
      opt: 'O',
      rep: 1,
      table: 618,
    },
    '23': {
      type: 'EI',
      desc: 'Address Identifier',
      opt: 'O',
      rep: 1,
    },
  },
};
