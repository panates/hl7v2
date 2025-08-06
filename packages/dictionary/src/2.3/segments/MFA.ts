import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master file acknowledgement segment',
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
      desc: 'Error Return Code and/or Text',
    },
    '5': {
      desc: 'Primary Key Value',
    },
  },
};
