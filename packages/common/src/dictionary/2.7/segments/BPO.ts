import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BPO: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - BPO',
    },
    '2': {
      desc: 'BP Universal Service Identifier',
    },
  },
};
