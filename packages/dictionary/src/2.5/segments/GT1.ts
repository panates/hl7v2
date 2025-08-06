import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GT1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - GT1',
    },
    '8': {
      desc: 'Guarantor Date/Time Of Birth',
    },
    '11': {
      type: 'CE',
    },
    '18': {
      desc: 'Guarantor Employer Phone Number',
    },
    '21': {
      desc: 'Guarantor Organization Name',
      opt: 'O',
    },
    '30': {
      type: 'CE',
    },
    '34': {
      rep: 'infinite',
    },
    '35': {
      type: 'CE',
      rep: 'infinite',
    },
    '38': {
      desc: 'Publicity Code',
    },
    '41': {
      type: 'CE',
    },
    '42': {
      rep: 'infinite',
    },
    '43': {
      desc: 'Nationality',
    },
    '44': {
      type: 'CE',
      rep: 'infinite',
    },
    '48': {
      desc: 'Contact Relationship',
      len: 3,
    },
    '52': {
      table: 295,
    },
    '55': {
      type: 'CE',
      rep: 'infinite',
    },
    '56': {
      type: 'ST',
      desc: 'Guarantor Birth Place',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '57': {
      type: 'IS',
      desc: 'VIP Indicator',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 99,
    },
  },
};
