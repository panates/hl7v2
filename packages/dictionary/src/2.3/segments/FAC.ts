import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const FAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Facility',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Facility ID',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
    '2': {
      type: 'ID',
      desc: 'Facility Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 331,
    },
    '3': {
      type: 'XAD',
      desc: 'Facility Address',
      opt: 'R',
      rep: 1,
      len: 200,
    },
    '4': {
      type: 'XTN',
      desc: 'Facility Telecommunication',
      opt: 'R',
      rep: 1,
      len: 44,
    },
    '5': {
      type: 'XCN',
      desc: 'Contact Person',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '6': {
      type: 'ST',
      desc: 'Contact Title',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '7': {
      type: 'XAD',
      desc: 'Contact Address',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '8': {
      type: 'XTN',
      desc: 'Contact Telecommunication',
      opt: 'O',
      rep: 'infinite',
      len: 44,
    },
    '9': {
      type: 'XCN',
      desc: 'Signature Authority',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '10': {
      type: 'ST',
      desc: 'Signature Authority Title',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '11': {
      type: 'XAD',
      desc: 'Signature Authority Address',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '12': {
      type: 'XTN',
      desc: 'Signature Authority Telecommunication',
      opt: 'O',
      rep: 1,
      len: 44,
    },
  },
};
