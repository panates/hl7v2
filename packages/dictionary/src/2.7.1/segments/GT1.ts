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
    },
    '36': {
      type: 'CWE',
    },
    '38': {
      type: 'CWE',
      desc: 'Publicity Code',
    },
    '41': {
      type: 'CWE',
    },
    '42': {
      rep: 'infinite',
    },
    '43': {
      type: 'CWE',
      desc: 'Nationality',
    },
    '44': {
      type: 'CWE',
      rep: 'infinite',
    },
    '47': {
      type: 'CWE',
    },
    '48': {
      desc: 'Contact Relationship',
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
    },
    '57': {
      desc: 'VIP Indicator',
      opt: 'O',
      rep: 1,
      table: 99,
    },
  },
};
