import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Facility',
  fields: {
    '1': {
      type: 'EI',
      opt: 'R',
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
      len: 250,
    },
    '4': {
      type: 'XTN',
      desc: 'Facility Telecommunication',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '5': {
      type: 'XCN',
      desc: 'Contact Person',
      opt: 'O',
      rep: 'infinite',
      len: 250,
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
      len: 250,
    },
    '8': {
      type: 'XTN',
      desc: 'Contact Telecommunication',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '9': {
      type: 'XCN',
      desc: 'Signature Authority',
      opt: 'R',
      len: 250,
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
      len: 250,
    },
    '12': {
      type: 'XTN',
      desc: 'Signature Authority Telecommunication',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
