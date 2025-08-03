import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PRD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Provider Data',
  fields: {
    '1': {
      opt: 'R',
      rep: 'infinite',
      table: 286,
    },
    '2': {
      type: 'XPN',
      desc: 'Provider Name',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'XAD',
      desc: 'Provider Address',
      opt: 'O',
    },
    '4': {
      type: 'PL',
      desc: 'Provider Location',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'XTN',
      desc: 'Provider Communication Information',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      desc: 'Preferred Method of Contact ',
      opt: 'O',
      rep: 1,
      table: 185,
    },
    '7': {
      desc: 'Provider Identifiers',
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      opt: 'O',
      rep: 1,
    },
    '9': {
      opt: 'O',
    },
  },
};
