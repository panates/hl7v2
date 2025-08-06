import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM6: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      len: 4,
    },
    '2': {
      type: 'TX',
      desc: 'Derivation Rule',
      len: 10240,
    },
  },
};
