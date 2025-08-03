import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Specimen Container detail',
  fields: {
    '22': {
      desc: 'Available Specimen Volume',
    },
    '24': {
      desc: 'Volume Units',
    },
    '27': {
      type: 'CWE',
    },
    '43': {
      type: 'CWE',
      desc: 'Special Handling Code',
    },
  },
};
