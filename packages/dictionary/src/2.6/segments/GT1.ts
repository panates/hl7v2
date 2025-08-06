import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GT1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - GT1',
    },
    '8': {
      type: 'DTM',
      desc: 'Guarantor Date/Time Of Birth',
      len: 24,
    },
    '11': {
      type: 'CWE',
    },
    '18': {
      desc: 'Guarantor Employer Phone Number',
    },
    '21': {
      desc: 'Guarantor Organization Name',
      opt: 'O',
    },
    '23': {
      type: 'CWE',
    },
    '24': {
      type: 'DTM',
      len: 24,
    },
    '26': {
      type: 'CWE',
    },
    '30': {
      type: 'CWE',
    },
    '34': {
      rep: 'infinite',
    },
    '35': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
    '36': {
      type: 'CWE',
      len: 705,
    },
    '38': {
      type: 'CWE',
      desc: 'Publicity Code',
      len: 705,
    },
    '41': {
      type: 'CWE',
      len: 705,
    },
    '42': {
      rep: 'infinite',
    },
    '43': {
      type: 'CWE',
      desc: 'Nationality',
      len: 705,
    },
    '44': {
      type: 'CWE',
      rep: 'infinite',
      len: 705,
    },
    '47': {
      type: 'CWE',
      len: 705,
    },
    '48': {
      desc: 'Contact Relationship',
      len: 3,
    },
    '52': {
      table: 295,
    },
    '55': {
      type: 'CWE',
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
