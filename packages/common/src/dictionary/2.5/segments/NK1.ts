import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NK1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Next of Kin / Associated Parties',
  fields: {
    '1': {
      desc: 'Set ID - NK1',
    },
    '2': {
      desc: 'NK Name',
    },
    '3': {
      type: 'CE',
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
      type: 'CE',
      desc: 'Contact Role',
      opt: 'O',
      rep: 1,
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
      type: 'CE',
      rep: 1,
    },
    '16': {
      desc: 'Date/Time of Birth',
    },
    '17': {
      rep: 'infinite',
    },
    '18': {
      rep: 'infinite',
    },
    '19': {
      type: 'CE',
      rep: 'infinite',
    },
    '22': {
      desc: 'Publicity Code',
    },
    '25': {
      type: 'CE',
    },
    '26': {
      rep: 'infinite',
    },
    '27': {
      desc: 'Nationality',
    },
    '28': {
      type: 'CE',
      rep: 'infinite',
    },
    '29': {
      rep: 'infinite',
    },
    '35': {
      type: 'CE',
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
