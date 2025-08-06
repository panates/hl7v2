import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LDP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location department segment',
  fields: {
    '1': {
      desc: 'Primary Key Value - LDP',
      len: 200,
    },
    '4': {
      desc: 'Specialty Type',
    },
    '5': {
      type: 'IS',
    },
    '7': {
      desc: 'Activation Date  LDP',
      len: 26,
    },
    '8': {
      len: 26,
    },
  },
};
