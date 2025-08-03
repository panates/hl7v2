import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LOC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LOC',
    },
    '3': {
      desc: 'Location Type - LOC',
    },
    '4': {
      desc: 'Organization Name - LOC',
      rep: 'infinite',
    },
    '5': {
      rep: 'infinite',
    },
    '7': {
      type: 'CWE',
    },
  },
};
