import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const CM1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - CM1',
    },
    '2': {
      type: 'CWE',
      len: 705,
    },
  },
};
