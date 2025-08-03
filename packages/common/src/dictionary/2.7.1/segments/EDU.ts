import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EDU: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '7': {
      type: 'CWE',
    },
    '9': {
      type: 'CWE',
      desc: 'Major Field of Study',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
