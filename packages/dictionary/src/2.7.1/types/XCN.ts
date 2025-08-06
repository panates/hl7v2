import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XCN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite ID Number and Name for Persons',
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
      desc: 'Name Type Code',
      table: 200,
    },
    '11': {
      len: 4,
    },
    '12': {
      desc: 'Check Digit Scheme',
      opt: 'C',
      len: 3,
      table: 61,
    },
    '13': {
      type: 'ID',
      len: 5,
      table: 203,
    },
    '14': {
      desc: 'Assigning Facility',
    },
    '15': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 465,
    },
    '16': {
      type: 'CWE',
    },
    '18': {
      len: 1,
      table: 444,
    },
    '19': {
      type: 'DTM',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'ST',
      desc: 'Professional Suffix',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'CWE',
      desc: 'Assigning Jurisdiction',
      rep: 1,
    },
    '23': {
      type: 'CWE',
      desc: 'Assigning Agency or Department',
      rep: 1,
    },
  },
};
