import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CTD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      opt: 'O',
      len: 200,
    },
    '3': {
      len: 200,
    },
    '5': {
      len: 100,
    },
    '6': {
      desc: 'Preferred Method Of Contact',
    },
    '7': {
      type: 'PI',
    },
  },
};
