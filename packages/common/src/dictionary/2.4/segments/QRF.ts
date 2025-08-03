import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QRF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Original Style Query Filter',
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 'infinite',
      len: 20,
    },
    '2': {
      type: 'TS',
      desc: 'When Data Start Date/Time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'When Data End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 60,
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
      len: 60,
    },
    '10': {
      type: 'NM',
      desc: 'Search Confidence Threshold',
      opt: 'O',
      rep: 1,
      len: 10,
    },
  },
};
