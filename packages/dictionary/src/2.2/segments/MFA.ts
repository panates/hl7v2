import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master file acknowledgement',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Record-level event code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 180,
    },
    '2': {
      type: 'ST',
      desc: 'MFN control ID',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'TS',
      desc: 'Event completion date / time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'CE',
      desc: 'Error return code and/or text',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'CE',
      desc: 'Primary key value',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
  },
};
