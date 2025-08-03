import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const UAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'User Authentication Credential',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'User Authentication Credential Type Code',
      opt: 'R',
      rep: 1,
      len: 705,
      table: 615,
    },
    '2': {
      type: 'ED',
      desc: 'User Authentication Credential',
      opt: 'R',
      rep: 1,
      len: 65536,
    },
  },
};
