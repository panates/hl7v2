import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NK1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Next of kin / associated parties segment',
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
      len: 60,
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
      len: 40,
    },
    '7': {
      type: 'CE',
      desc: 'Contact Role',
      opt: 'O',
      rep: 1,
      len: 200,
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
      len: 20,
    },
    '13': {
      desc: 'Organization Name - NK1',
      opt: 'O',
      len: 90,
    },
    '14': {
      type: 'CE',
      rep: 1,
      len: 80,
    },
    '16': {
      desc: 'Date/Time Of Birth',
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
      len: 80,
    },
    '22': {
      desc: 'Publicity Code',
      len: 80,
    },
    '25': {
      type: 'CE',
      len: 80,
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
      len: 80,
    },
    '29': {
      rep: 'infinite',
      len: 80,
    },
    '30': {
      desc: 'Contact Person s Name',
    },
    '33': {
      desc: 'Next of Kin/Associated Party s Identifiers',
    },
    '35': {
      type: 'CE',
      rep: 'infinite',
      len: 80,
    },
    '36': {
      table: 295,
    },
  },
};
