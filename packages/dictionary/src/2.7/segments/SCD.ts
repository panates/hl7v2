import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SCD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '6': {
      desc: 'Condition Time ',
    },
    '7': {
      desc: 'Sterilize Time ',
    },
    '10': {
      desc: 'Device Status ',
    },
  },
};
