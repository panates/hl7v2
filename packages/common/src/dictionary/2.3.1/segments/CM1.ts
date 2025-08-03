import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical study phase master segment',
  fields: {
    '1': {
      desc: 'Set ID - CM1',
    },
  },
};
