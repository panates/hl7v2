import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GOL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '8': {
      desc: 'Expected Goal Achieve Date/Time',
    },
  },
};
