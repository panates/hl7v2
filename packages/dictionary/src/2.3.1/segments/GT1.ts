import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GT1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Guarantor segment',
  fields: {
    '1': {
      desc: 'Set ID - GT1',
    },
    '6': {
      desc: 'Guarantor Ph Num-Home',
    },
    '8': {
      desc: 'Guarantor Date/Time Of Birth',
    },
    '11': {
      type: 'CE',
      len: 80,
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
      len: 80,
    },
    '34': {
      rep: 'infinite',
    },
    '35': {
      type: 'CE',
      rep: 'infinite',
      len: 80,
    },
    '38': {
      desc: 'Publicity Code',
      len: 80,
    },
    '41': {
      type: 'CE',
      len: 80,
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
      len: 80,
    },
    '45': {
      desc: 'Contact Person s Name',
    },
    '47': {
      len: 80,
    },
    '48': {
      desc: 'Contact Relationship',
    },
    '51': {
      desc: 'Guarantor Employer s Organization Name',
    },
    '52': {
      table: 295,
    },
    '55': {
      type: 'CE',
      rep: 'infinite',
      len: 80,
    },
  },
};
