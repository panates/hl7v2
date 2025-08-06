import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CSP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Phase',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Study Phase Identifier',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '2': {
      type: 'TS',
      desc: 'Date/time Study Phase Began',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'TS',
      desc: 'Date/time Study Phase Ended',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'CE',
      desc: 'Study Phase Evaluability',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
