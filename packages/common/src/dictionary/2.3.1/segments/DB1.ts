import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DB1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Disability segment',
  fields: {
    '2': {
      desc: 'Disabled Person Code',
      table: 334,
    },
    '3': {
      desc: 'Disabled Person Identifier',
    },
    '5': {
      desc: 'Disability Start Date',
    },
    '6': {
      desc: 'Disability End Date',
    },
    '7': {
      desc: 'Disability Return to Work Date',
    },
    '8': {
      desc: 'Disability Unable to Work Date',
    },
  },
};
