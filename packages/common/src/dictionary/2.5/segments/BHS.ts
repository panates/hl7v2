import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BHS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Batch Field Separator',
    },
    '2': {
      desc: 'Batch Encoding Characters',
    },
    '3': {
      type: 'HD',
      desc: 'Batch Sending Application',
      len: 227,
    },
    '4': {
      type: 'HD',
      desc: 'Batch Sending Facility',
      len: 227,
    },
    '5': {
      type: 'HD',
      desc: 'Batch Receiving Application',
      len: 227,
    },
    '6': {
      type: 'HD',
      desc: 'Batch Receiving Facility',
      len: 227,
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
