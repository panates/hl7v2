import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const RDT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Column Value',
      len: 99999,
    },
  },
};
