import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ISD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Interaction Status Detail',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Reference Interaction Number',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'CE',
      desc: 'Interaction Type Identifier',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 368,
    },
    '3': {
      type: 'CE',
      desc: 'Interaction Active State',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 387,
    },
  },
};
