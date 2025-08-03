import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FHS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'File Field Separator',
    },
    '2': {
      desc: 'File Encoding Characters',
    },
    '3': {
      desc: 'File Sending Application',
    },
    '4': {
      desc: 'File Sending Facility',
    },
    '5': {
      desc: 'File Receiving Application',
    },
    '6': {
      desc: 'File Receiving Facility',
    },
    '7': {
      len: 26,
    },
    '8': {
      desc: 'File Security',
    },
    '10': {
      desc: 'File Header Comment',
    },
    '11': {
      desc: 'File Control ID',
    },
    '12': {
      desc: 'Reference File Control ID',
    },
  },
};
