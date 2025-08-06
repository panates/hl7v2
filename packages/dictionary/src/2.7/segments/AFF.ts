import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AFF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Professional Affiliation',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - AFF',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'XON',
      desc: 'Professional Organization',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'XAD',
      desc: 'Professional Organization Address',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DR',
      desc: 'Professional Organization Affiliation Date Range',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'ST',
      desc: 'Professional Affiliation Additional Information',
      opt: 'O',
      rep: 1,
    },
  },
};
