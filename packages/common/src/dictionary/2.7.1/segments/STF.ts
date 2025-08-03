import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const STF: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Primary Key Value - STF',
      rep: 1,
    },
    '2': {
      type: 'CX',
      desc: 'Staff Identifier List',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      desc: 'Staff Name',
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      desc: 'Staff Type',
      opt: 'O',
      rep: 'infinite',
      table: 182,
    },
    '5': {
      opt: 'O',
      rep: 1,
      table: 1,
    },
    '6': {
      type: 'DTM',
      desc: 'Date/Time of Birth',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 183,
    },
    '8': {
      type: 'CWE',
      desc: 'Department',
      opt: 'O',
      rep: 'infinite',
    },
    '9': {
      type: 'CWE',
      desc: 'Hospital Service - STF',
      opt: 'O',
      rep: 'infinite',
    },
    '10': {
      desc: 'Phone',
      opt: 'O',
      rep: 'infinite',
    },
    '11': {
      type: 'XAD',
      desc: 'Office/Home Address/Birthplace',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'DIN',
      desc: 'Institution Activation Date',
      opt: 'O',
      rep: 'infinite',
      table: 537,
    },
    '13': {
      type: 'DIN',
      desc: 'Institution Inactivation Date',
      opt: 'O',
      rep: 'infinite',
      table: 537,
    },
    '14': {
      type: 'CWE',
      desc: 'Backup Person ID',
      opt: 'O',
      rep: 'infinite',
    },
    '15': {
      type: 'ST',
      desc: 'E-Mail Address',
      opt: 'O',
      rep: 'infinite',
    },
    '16': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'CWE',
      rep: 1,
    },
    '20': {
      type: 'CWE',
    },
    '21': {
      desc: 'Additional Insured on Auto',
    },
    '23': {
      desc: 'Copy Auto Ins',
    },
    '27': {
      type: 'CWE',
    },
    '28': {
      type: 'CWE',
    },
    '30': {
      type: 'CWE',
      desc: 'Citizenship',
      opt: 'O',
      rep: 'infinite',
      table: 171,
    },
    '31': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '32': {
      type: 'ID',
      desc: 'Death Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '33': {
      type: 'CWE',
      desc: 'Institution Relationship Type Code',
      opt: 'O',
      rep: 1,
      table: 538,
    },
    '34': {
      type: 'DR',
      desc: 'Institution Relationship Period',
      opt: 'O',
      rep: 1,
    },
    '35': {
      type: 'DT',
      desc: 'Expected Return Date',
      opt: 'O',
      rep: 1,
    },
    '36': {
      type: 'CWE',
      desc: 'Cost Center Code',
      opt: 'O',
      rep: 'infinite',
      table: 539,
    },
    '37': {
      type: 'ID',
      desc: 'Generic Classification Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '38': {
      type: 'CWE',
      desc: 'Inactive Reason Code',
      opt: 'O',
      rep: 1,
      table: 540,
    },
    '39': {
      type: 'CWE',
      desc: 'Generic resource type or category',
      opt: 'O',
      rep: 'infinite',
      table: 771,
    },
  },
};
