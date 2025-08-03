import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Phase Master',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Study Phase Identifier',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '3': {
      type: 'ST',
      desc: 'Description of Study Phase',
      opt: 'R',
      rep: 1,
      len: 300,
    },
  },
};
