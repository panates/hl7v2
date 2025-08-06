import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM7: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
    },
  },
};
