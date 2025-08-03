import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QRF: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 'infinite',
    },
    '2': {
      desc: 'When Data Start Date/Time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      desc: 'When Data End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      desc: 'Which Date/Time Qualifier',
    },
    '7': {
      desc: 'Which Date/Time Status Qualifier',
    },
    '8': {
      desc: 'Date/Time Selection Qualifier',
    },
    '9': {
      type: 'TQ',
      desc: 'When Quantity/Timing Qualifier',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'NM',
      desc: 'Search Confidence Threshold',
      opt: 'O',
      rep: 1,
    },
  },
};
