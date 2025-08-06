import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const DSC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Continuation Pointer',
    },
  },
};
