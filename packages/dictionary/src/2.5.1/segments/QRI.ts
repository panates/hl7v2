import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query Response Instance',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Candidate Confidence',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '2': {
      type: 'IS',
      desc: 'Match Reason Code',
      opt: 'O',
      rep: 'infinite',
      len: 2,
      table: 392,
    },
    '3': {
      type: 'CE',
      desc: 'Algorithm Descriptor',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 393,
    },
  },
};
