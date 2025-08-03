import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
      type: 'CWE',
      desc: 'Location Type-AIL',
      opt: 'O',
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      type: 'DTM',
    },
    '8': {
      type: 'CNE',
    },
    '10': {
      type: 'CNE',
    },
    '12': {
      type: 'CWE',
    },
  },
};
