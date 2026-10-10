import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const PDA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Death and Autopsy',
  fields: {
    '1': {
      type: 'CWE',
    },
    '4': {
      type: 'DTM',
    },
  },
};
