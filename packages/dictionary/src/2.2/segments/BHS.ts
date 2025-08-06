import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const BHS: DeepPartial<HL7SegmentDefinition> = {
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
      len: 30,
    },
    '6': {
      desc: 'Batch Receiving Facility',
      len: 30,
    },
    '7': {
      desc: 'Batch creation date / time',
      len: 26,
    },
    '8': {
      desc: 'Batch Security',
    },
    '9': {
      desc: 'Batch name / ID / type',
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
