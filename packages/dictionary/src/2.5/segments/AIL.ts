import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AIL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      len: 3,
    },
    '3': {
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      desc: 'Location Type-AIL',
      opt: 'O',
      table: 305,
    },
  },
};
