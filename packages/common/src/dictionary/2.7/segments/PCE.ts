import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PCE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Charge Cost Center Exceptions',
  fields: {
    '1': {
      desc: 'Set ID - PCE',
      len: 4,
    },
    '2': {
      type: 'CX',
    },
  },
};
