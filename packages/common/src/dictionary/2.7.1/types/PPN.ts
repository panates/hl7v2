import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PPN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      type: 'FN',
    },
    '4': {
      desc: 'Second and Further Given Names or Initials Thereof',
    },
    '8': {
      table: 297,
    },
    '10': {
      table: 200,
    },
    '12': {
      opt: 'C',
      len: 3,
      table: 61,
    },
    '13': {
      type: 'ID',
      len: 5,
      table: 203,
    },
    '15': {
      type: 'DTM',
    },
    '16': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 465,
    },
    '17': {
      type: 'CWE',
    },
    '19': {
      len: 1,
      table: 444,
    },
    '20': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'ST',
      desc: 'Professional Suffix',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'CWE',
      desc: 'Assigning Jurisdiction',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'CWE',
      desc: 'Assigning Agency or Department',
      opt: 'O',
      rep: 1,
    },
  },
};
