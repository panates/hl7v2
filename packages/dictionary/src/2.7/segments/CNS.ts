import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CNS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clear Notification',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Starting Notification Reference Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Ending Notification Reference Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      desc: 'Starting Notification Date/Time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Ending Notification Date/Time',
      opt: 'O',
      rep: 1,
    },
    '5': {
      desc: 'Starting Notification Code',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Ending Notification Code',
      opt: 'O',
      rep: 1,
    },
  },
};
