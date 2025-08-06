import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Provider Data',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Role',
      opt: 'R',
      rep: 'infinite',
      len: 200,
    },
    '2': {
      type: 'XPN',
      desc: 'Provider Name',
      opt: 'O',
      rep: 'infinite',
      len: 106,
    },
    '3': {
      type: 'XAD',
      desc: 'Provider Address',
      opt: 'O',
      rep: 1,
      len: 60,
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
      len: 20,
    },
    '6': {
      type: 'CE',
      desc: 'Preferred Method of Contact',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '7': {
      type: 'CM_PI',
      desc: 'Provider Identifiers',
      opt: 'O',
      rep: 'infinite',
      len: 100,
    },
    '8': {
      type: 'TS',
      desc: 'Effective Start Date of Role',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '9': {
      type: 'TS',
      desc: 'Effective End Date of Role',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
