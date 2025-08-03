import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment information - location resource segment',
  fields: {
    '2': {
      len: 3,
    },
    '3': {
      opt: 'O',
    },
    '4': {
      desc: 'Location Type-AIL',
      opt: 'R',
    },
  },
};
