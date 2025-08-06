import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
      len: 30,
    },
    '6': {
      desc: 'File Receiving Facility',
      len: 30,
    },
    '7': {
      desc: 'File creation date / time',
      len: 26,
    },
    '8': {
      desc: 'File Security',
    },
    '9': {
      desc: 'File name / ID',
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
