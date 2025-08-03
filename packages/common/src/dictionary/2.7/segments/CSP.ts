import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Phase',
  fields: {
    '1': {
      desc: 'Study Phase Identifier',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Date/time Study Phase Began',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Date/time Study Phase Ended',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Study Phase Evaluability',
      opt: 'C',
      rep: 1,
    },
  },
};
