import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EDU: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID _ EDU',
    },
    '9': {
      type: 'CWE',
      desc: 'Major Field of Study',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
  },
};
