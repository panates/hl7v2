import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Information',
  fields: {
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'DTM',
    },
    '6': {
      type: 'CNE',
    },
    '8': {
      type: 'CNE',
    },
    '10': {
      type: 'CWE',
    },
    '11': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      type: 'CWE',
      len: 705,
    },
  },
};
