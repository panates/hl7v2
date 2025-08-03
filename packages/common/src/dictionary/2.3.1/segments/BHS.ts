import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BHS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Batch header segment',
  fields: {
    '1': {
      desc: 'Batch Field Separator',
    },
    '2': {
      desc: 'Batch Encoding Characters',
    },
    '3': {
      desc: 'Batch Sending Application',
    },
    '4': {
      desc: 'Batch Sending Facility',
    },
    '5': {
      desc: 'Batch Receiving Application',
    },
    '6': {
      desc: 'Batch Receiving Facility',
    },
    '7': {
      len: 26,
    },
    '8': {
      desc: 'Batch Security',
    },
    '10': {
      desc: 'Batch Comment',
    },
    '11': {
      desc: 'Batch Control ID',
    },
    '12': {
      desc: 'Reference Batch Control ID',
    },
  },
};
