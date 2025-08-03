import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PDA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Death and Autopsy',
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '4': {
      type: 'DTM',
      len: 24,
    },
  },
};
