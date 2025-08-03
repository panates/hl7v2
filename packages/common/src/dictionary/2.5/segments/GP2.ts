import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const GP2: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '11': {
      desc: 'Expected CMS Payment Amount',
    },
    '14': {
      desc: 'Pay Rate per Service Unit',
    },
  },
};
