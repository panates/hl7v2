import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RF1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Referral Information Segment',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Referral Status',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '2': {
      type: 'CE',
      desc: 'Referral Priority',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '3': {
      type: 'CE',
      desc: 'Referral Type',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '4': {
      type: 'CE',
      desc: 'Referral Disposition',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '5': {
      type: 'CE',
      desc: 'Referral Category',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '6': {
      type: 'EI',
      desc: 'Originating Referral Identifier',
      opt: 'R',
      rep: 1,
      len: 30,
    },
    '7': {
      type: 'TS',
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '8': {
      type: 'TS',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '9': {
      type: 'TS',
      desc: 'Process Date',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '10': {
      type: 'CE',
      desc: 'Referral Reason',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '11': {
      type: 'EI',
      desc: 'External Referral Identifier',
      opt: 'O',
      rep: 'infinite',
      len: 30,
    },
  },
};
