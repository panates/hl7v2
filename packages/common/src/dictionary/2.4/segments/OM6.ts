import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM6: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observations that are Calculated from Other Observ',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      len: 4,
    },
    '2': {
      type: 'TX',
      desc: 'Derivation Rule',
      len: 10240,
    },
  },
};
