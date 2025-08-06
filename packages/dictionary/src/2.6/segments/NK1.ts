import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NK1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Next of Kin / Associated Parties',
  fields: {
    '1': {
      desc: 'Set ID - NK1',
    },
    '2': {
      desc: 'NK Name',
      table: 200,
    },
    '3': {
      type: 'CWE',
      desc: 'Relationship',
      len: 705,
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
      len: 705,
    },
    '8': {
      type: 'DT',
      desc: 'Start Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '9': {
      type: 'DT',
      desc: 'End Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '10': {
      type: 'ST',
      desc: 'Next of Kin / Associated Parties Job Title',
      opt: 'O',
      rep: 1,
      len: 60,
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
      len: 705,
    },
    '16': {
      type: 'DTM',
      desc: 'Date/Time of Birth',
      len: 24,
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
      len: 705,
    },
    '20': {
      type: 'CWE',
      len: 705,
    },
    '22': {
      type: 'CWE',
      desc: 'Publicity Code',
      len: 705,
    },
    '25': {
      type: 'CWE',
      len: 705,
    },
    '26': {
      rep: 'infinite',
    },
    '27': {
      type: 'CWE',
      desc: 'Nationality',
      len: 705,
    },
    '28': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
    '29': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
    '30': {
      table: 200,
    },
    '35': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
    '36': {
      table: 295,
    },
    '38': {
      type: 'ST',
      desc: 'Next of Kin Birth Place',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '39': {
      type: 'IS',
      desc: 'VIP Indicator',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 99,
    },
  },
};
