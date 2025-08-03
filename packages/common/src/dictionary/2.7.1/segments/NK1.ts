import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NK1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Next of Kin / Associated Parties',
  fields: {
    '1': {
      desc: 'Set ID - NK1',
    },
    '2': {
      table: 200,
    },
    '3': {
      type: 'CWE',
      desc: 'Relationship',
    },
    '4': {
      desc: 'Address',
    },
    '5': {
      desc: 'Phone Number',
    },
    '6': {
      desc: 'Business Phone Number',
      opt: 'O',
    },
    '7': {
      type: 'CWE',
      desc: 'Contact Role',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'DT',
      desc: 'Start Date',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'DT',
      desc: 'End Date',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Next of Kin / Associated Parties Job Title',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Next of Kin / Associated Parties Job Code/Class',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Next of Kin / Associated Parties Employee Number',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Organization Name - NK1',
      opt: 'O',
    },
    '14': {
      type: 'CWE',
      rep: 1,
    },
    '16': {
      type: 'DTM',
      desc: 'Date/Time of Birth',
    },
    '17': {
      rep: 'infinite',
    },
    '18': {
      rep: 'infinite',
    },
    '19': {
      type: 'CWE',
      rep: 'infinite',
    },
    '20': {
      type: 'CWE',
    },
    '22': {
      type: 'CWE',
      desc: 'Publicity Code',
    },
    '25': {
      type: 'CWE',
    },
    '26': {
      rep: 'infinite',
    },
    '27': {
      type: 'CWE',
      desc: 'Nationality',
    },
    '28': {
      type: 'CWE',
      rep: 'infinite',
    },
    '29': {
      type: 'CWE',
      rep: 'infinite',
    },
    '30': {
      table: 200,
    },
    '35': {
      type: 'CWE',
      rep: 'infinite',
    },
    '36': {
      table: 295,
    },
    '38': {
      type: 'ST',
      desc: 'Next of Kin Birth Place',
      opt: 'O',
      rep: 1,
    },
    '39': {
      desc: 'VIP Indicator',
      opt: 'O',
      rep: 1,
      table: 99,
    },
  },
};
