import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master File Acknowledgment',
  fields: {
    '1': {
      desc: 'Record-Level Event Code',
    },
    '2': {
      desc: 'MFN Control ID',
      opt: 'C',
    },
    '3': {
      desc: 'Event Completion Date/Time',
    },
    '4': {
      table: 181,
    },
    '5': {
      type: 'ST',
      desc: 'Primary Key Value - MFA',
    },
  },
};
