import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AUT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Authorizing Payor, Plan ID',
    },
  },
};
