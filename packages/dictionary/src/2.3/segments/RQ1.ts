import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const RQ1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition detail-1 segment',
  fields: {
    '1': {
      type: 'ST',
    },
    '2': {
      desc: 'Manufactured ID',
    },
  },
};
