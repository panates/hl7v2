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
    },
    '3': {
      desc: 'Event Completion Date/Time',
    },
    '4': {
      len: 250,
      table: 181,
    },
    '5': {
      desc: 'Primary Key Value - MFA',
      len: 250,
    },
  },
};
