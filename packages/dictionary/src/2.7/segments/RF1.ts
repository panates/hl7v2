import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RF1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Referral Information',
  fields: {
    '1': {
      desc: 'Referral Status',
      opt: 'O',
      rep: 1,
      table: 283,
    },
    '2': {
      desc: 'Referral Priority',
      opt: 'O',
      rep: 1,
      table: 280,
    },
    '3': {
      desc: 'Referral Type',
      opt: 'O',
      rep: 1,
      table: 281,
    },
    '4': {
      desc: 'Referral Disposition',
      opt: 'O',
      rep: 'infinite',
      table: 282,
    },
    '5': {
      desc: 'Referral Category',
      opt: 'O',
      rep: 1,
      table: 284,
    },
    '6': {
      type: 'EI',
      desc: 'Originating Referral Identifier',
      opt: 'R',
      rep: 1,
    },
    '7': {
      desc: 'Effective Date',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Process Date',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Referral Reason',
      opt: 'O',
      rep: 'infinite',
      table: 336,
    },
    '11': {
      type: 'EI',
      desc: 'External Referral Identifier',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      desc: 'Referral Documentation Completion Status ',
    },
  },
};
