import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const URS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Unsolicited selection segment',
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 'infinite',
      len: 20,
    },
    '2': {
      type: 'TS',
      desc: 'R/U When Data Start Date/Time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'R/U When Data End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '6': {
      desc: 'R/U Which Date/Time Qualifier',
    },
    '7': {
      desc: 'R/U Which Date/Time Status Qualifier',
    },
    '8': {
      desc: 'R/U Date/Time Selection Qualifier',
    },
    '9': {
      type: 'TQ',
      desc: 'R/U Quantity/Timing Qualifier',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
