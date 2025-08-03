import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RQD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '6': {
      desc: 'Requisition Unit of Measure',
    },
    '7': {
      desc: 'Department Cost Center',
    },
    '9': {
      desc: 'Deliver To ID',
    },
  },
};
