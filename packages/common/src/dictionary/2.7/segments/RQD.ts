import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RQD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition Detail',
  fields: {
    '2': {
      opt: 'C',
    },
    '3': {
      opt: 'C',
    },
    '4': {
      opt: 'C',
    },
    '6': {
      desc: 'Requisition Unit of Measure',
    },
    '7': {
      type: 'CX',
      desc: 'Cost Center Account Number',
    },
    '8': {
      type: 'CWE',
    },
    '9': {
      desc: 'Deliver To ID',
    },
  },
};
