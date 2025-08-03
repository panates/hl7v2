import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CON: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '25': {
      type: 'CWE',
      desc: 'Relationship to Subject ',
    },
  },
};
