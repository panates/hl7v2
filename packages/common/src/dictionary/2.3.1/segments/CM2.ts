import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical study schedule master segment',
  fields: {
    '1': {
      desc: 'Set ID - CM2',
    },
    '4': {
      rep: 200,
    },
  },
};
