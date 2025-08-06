import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'System Date/Time',
      len: 26,
    },
  },
};
