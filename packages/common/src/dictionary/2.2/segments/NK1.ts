import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NK1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - Next of Kin',
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
      rep: 3,
    },
    '6': {
      type: 'TN',
      desc: 'Business Phone Number',
      opt: 'O',
      rep: 1,
      len: 40,
    },
    '7': {
      type: 'CE',
      desc: 'Contact Role',
      opt: 'O',
      rep: 1,
      len: 60,
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
      desc: 'Next of Kin',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '11': {
      type: 'CM_JOB_CODE',
      desc: 'Next of kin job code / class',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '12': {
      type: 'ST',
      desc: 'Next of Kin Employee Number',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '13': {
      type: 'ST',
      desc: 'Organization Name',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
