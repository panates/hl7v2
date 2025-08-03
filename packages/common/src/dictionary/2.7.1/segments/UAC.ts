import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const UAC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'User Authentication Credential Type Code',
      opt: 'R',
      rep: 1,
      table: 615,
    },
    '2': {
      type: 'ED',
      opt: 'R',
      rep: 1,
    },
  },
};
