import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IVT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set Id - IVT',
    },
    '7': {
      desc: 'Bin Location Identifier ',
    },
    '8': {
      table: 818,
    },
    '11': {
      desc: 'Patient Chargeable Indicator ',
    },
    '17': {
      desc: 'Reusable Item Indicator ',
    },
    '26': {
      desc: 'Operating Room Par Level Indicator ',
    },
  },
};
