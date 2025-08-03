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
      len: 1,
      table: 139,
    },
    '5': {
      opt: 'O',
      rep: 'infinite',
      len: 1,
      table: 137,
    },
    '6': {
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '7': {
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      opt: 'O',
      rep: 1,
      len: 15,
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
      len: 20,
    },
    '11': {
      desc: 'Dependent Of Military Recipient',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'Military Organization',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '13': {
      type: 'ST',
      desc: 'Military Station',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '14': {
      desc: 'Military Service',
      opt: 'O',
      rep: 1,
      len: 14,
      table: 140,
    },
    '15': {
      desc: 'Military Rank/Grade',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 141,
    },
    '16': {
      desc: 'Military Status',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 142,
    },
    '17': {
      type: 'DT',
      desc: 'Military Retire Date',
      opt: 'O',
      rep: 1,
      len: 8,
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
      len: 1,
    },
    '22': {
      opt: 'O',
      rep: 'infinite',
    },
    '23': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '24': {
      type: 'IS',
      opt: 'O',
      rep: 'infinite',
      len: 8,
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
      len: 1,
      table: 144,
    },
    '28': {
      type: 'RMC',
      opt: 'O',
      rep: 'infinite',
      len: 82,
    },
    '29': {
      type: 'PTA',
      opt: 'O',
      rep: 'infinite',
      len: 56,
    },
    '30': {
      type: 'DDI',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '32': {
      rep: 'infinite',
    },
    '33': {
      type: 'CE',
      rep: 'infinite',
    },
    '36': {
      desc: 'Publicity Code',
    },
    '39': {
      type: 'CE',
    },
    '40': {
      rep: 'infinite',
    },
    '41': {
      desc: 'Nationality',
    },
    '42': {
      type: 'CE',
      rep: 'infinite',
    },
    '43': {
      type: 'CE',
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
      type: 'CE',
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
      type: 'CE',
      rep: 'infinite',
    },
    '72': {
      type: 'CE',
      desc: 'CMS Patient_s Relationship to Insured',
    },
  },
};
