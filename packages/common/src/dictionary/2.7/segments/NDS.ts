import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NDS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Notification Detail',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Notification Reference Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Notification Date/Time',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Notification Alert Severity',
      opt: 'R',
      rep: 1,
      table: 367,
    },
    '4': {
      desc: 'Notification Code',
      opt: 'R',
      rep: 1,
    },
  },
};
