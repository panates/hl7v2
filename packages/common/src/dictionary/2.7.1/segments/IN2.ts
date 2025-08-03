import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IN2: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      opt: 'O',
      rep: 'infinite',
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '3': {
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      opt: 'O',
      rep: 1,
      table: 139,
    },
    '5': {
      opt: 'O',
      rep: 'infinite',
      table: 137,
    },
    '6': {
      opt: 'O',
      rep: 1,
    },
    '7': {
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Military Sponsor Name',
      opt: 'O',
      rep: 'infinite',
    },
    '10': {
      desc: 'Military ID Number',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Dependent Of Military Recipient',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'Military Organization',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'ST',
      desc: 'Military Station',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Military Service',
      opt: 'O',
      rep: 1,
      table: 140,
    },
    '15': {
      desc: 'Military Rank/Grade',
      opt: 'O',
      rep: 1,
      table: 141,
    },
    '16': {
      desc: 'Military Status',
      opt: 'O',
      rep: 1,
      table: 142,
    },
    '17': {
      type: 'DT',
      desc: 'Military Retire Date',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'ID',
      desc: 'Military Non-Avail Cert On File',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '19': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '20': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '21': {
      opt: 'O',
      rep: 1,
    },
    '22': {
      opt: 'O',
      rep: 'infinite',
    },
    '23': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '24': {
      opt: 'O',
      rep: 'infinite',
      table: 143,
    },
    '25': {
      desc: 'Payor ID',
      opt: 'O',
      rep: 'infinite',
    },
    '26': {
      opt: 'O',
      rep: 'infinite',
    },
    '27': {
      opt: 'O',
      rep: 1,
      table: 144,
    },
    '28': {
      type: 'RMC',
      opt: 'O',
      rep: 'infinite',
    },
    '29': {
      type: 'PTA',
      opt: 'O',
      rep: 'infinite',
    },
    '30': {
      type: 'DDI',
      opt: 'O',
      rep: 1,
    },
    '32': {
      rep: 'infinite',
    },
    '33': {
      type: 'CWE',
      rep: 'infinite',
    },
    '34': {
      type: 'CWE',
    },
    '36': {
      type: 'CWE',
      desc: 'Publicity Code',
    },
    '39': {
      type: 'CWE',
    },
    '40': {
      rep: 'infinite',
    },
    '41': {
      type: 'CWE',
    },
    '42': {
      type: 'CWE',
      rep: 'infinite',
    },
    '43': {
      type: 'CWE',
    },
    '55': {
      desc: 'Relationship to the Patient Start Date',
    },
    '56': {
      desc: 'Relationship to the Patient Stop Date',
    },
    '58': {
      desc: 'Insurance Co Contact Phone Number',
    },
    '62': {
      type: 'CWE',
    },
    '65': {
      type: 'CWE',
    },
    '66': {
      len: 1,
    },
    '67': {
      desc: 'Copay Limit Flag',
      len: 1,
    },
    '68': {
      len: 1,
    },
    '69': {
      desc: 'Insured Organization Name and ID',
    },
    '70': {
      desc: 'Insured Employer Organization Name and ID',
    },
    '71': {
      type: 'CWE',
      rep: 'infinite',
    },
    '72': {
      type: 'CWE',
    },
  },
};
