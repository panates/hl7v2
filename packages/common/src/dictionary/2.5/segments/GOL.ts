import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const GOL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '8': {
      desc: 'Expected Goal Achieve Date/Time',
    },
  },
};
