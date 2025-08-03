import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CNS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clear Notification',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Starting Notification Reference Number',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'NM',
      desc: 'Ending Notification Reference Number',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'TS',
      desc: 'Starting Notification Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'TS',
      desc: 'Ending Notification Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'CE',
      desc: 'Starting Notification Code',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '6': {
      type: 'CE',
      desc: 'Ending Notification Code',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
