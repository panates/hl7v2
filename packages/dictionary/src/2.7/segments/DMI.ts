import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const DMI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'DRG Master File Information',
  fields: {
    '1': {
      desc: 'Diagnostic Related Group ',
    },
    '2': {
      opt: 'C',
    },
    '3': {
      opt: 'C',
    },
    '4': {
      opt: 'C',
    },
    '5': {
      opt: 'C',
    },
  },
};
