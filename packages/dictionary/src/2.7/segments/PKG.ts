import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PKG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Item Packaging',
  fields: {
    '1': {
      len: 4,
    },
  },
};
