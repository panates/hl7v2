import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RDT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Column Value',
      len: 99999,
    },
  },
};
