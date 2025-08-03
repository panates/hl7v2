import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RDT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Table Row Data',
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 1,
    },
  },
};
