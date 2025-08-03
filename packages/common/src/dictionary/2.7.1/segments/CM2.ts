import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CM2: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID- CM2',
    },
    '2': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
    },
  },
};
