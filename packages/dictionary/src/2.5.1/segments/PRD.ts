import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Provider Data',
  fields: {
    '1': {
      type: 'CE',
      opt: 'R',
      rep: 'infinite',
      len: 250,
      table: 286,
    },
    '2': {
      type: 'XPN',
      desc: 'Provider Name',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '3': {
      type: 'XAD',
      desc: 'Provider Address',
      opt: 'O',
      len: 250,
    },
    '4': {
      type: 'PL',
      desc: 'Provider Location',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'XTN',
      desc: 'Provider Communication Information',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '6': {
      type: 'CE',
      desc: 'Preferred Method of Contact',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 185,
    },
    '7': {
      desc: 'Provider Identifiers',
      opt: 'O',
      rep: 'infinite',
      len: 100,
    },
    '8': {
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '9': {
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
