import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const XCN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite ID Number and Name for Persons',
  fields: {
    '1': {
      len: 15,
    },
    '2': {
      type: 'FN',
      len: 194,
    },
    '3': {
      len: 30,
    },
    '4': {
      desc: 'Second and Further Given Names or Initials Thereof',
      len: 30,
    },
    '5': {
      len: 20,
    },
    '6': {
      len: 20,
    },
    '7': {
      type: 'IS',
      len: 5,
      table: 360,
    },
    '8': {
      type: 'IS',
      opt: 'C',
      len: 4,
      table: 297,
    },
    '9': {
      len: 227,
    },
    '10': {
      desc: 'Name Type Code',
      len: 1,
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
      len: 227,
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
      len: 705,
    },
    '17': {
      len: 49,
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
      len: 24,
    },
    '20': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '21': {
      type: 'ST',
      desc: 'Professional Suffix',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '22': {
      type: 'CWE',
      desc: 'Assigning Jurisdiction',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '23': {
      type: 'CWE',
      desc: 'Assigning Agency or Department',
      opt: 'O',
      rep: 1,
      len: 705,
    },
  },
};
