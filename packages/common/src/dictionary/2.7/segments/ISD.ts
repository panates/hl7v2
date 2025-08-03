import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ISD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Interaction Status Detail',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Reference Interaction Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Interaction Type Identifier ',
      opt: 'O',
      rep: 1,
      table: 368,
    },
    '3': {
      desc: 'Interaction Active State',
      opt: 'R',
      rep: 1,
      table: 387,
    },
  },
};
