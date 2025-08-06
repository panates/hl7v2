import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AUT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Authorizing Payor, Plan ID',
    },
  },
};
