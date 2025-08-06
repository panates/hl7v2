import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NDS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Notification Detail',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Notification Reference Number',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'TS',
      desc: 'Notification Date/Time',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'CE',
      desc: 'Notification Alert Severity',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 367,
    },
    '4': {
      type: 'CE',
      desc: 'Notification Code',
      opt: 'R',
      rep: 1,
      len: 250,
    },
  },
};
