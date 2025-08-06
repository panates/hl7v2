import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const STZ: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      table: 702,
    },
    '4': {
      desc: 'Maintenance Type ',
    },
  },
};
