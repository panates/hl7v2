import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const RDT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Table row data segment',
  fields: {
    '1': {
      desc: 'Column Value',
      opt: 'O',
    },
  },
};
