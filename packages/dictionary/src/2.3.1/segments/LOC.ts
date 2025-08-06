import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LOC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location identification segment',
  fields: {
    '1': {
      desc: 'Primary Key Value - LOC',
      len: 200,
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
    '8': {
      type: 'IS',
    },
  },
};
