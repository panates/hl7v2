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
      type: 'HD',
      desc: 'File Sending Application',
      len: 227,
    },
    '4': {
      type: 'HD',
      desc: 'File Sending Facility',
      len: 227,
    },
    '5': {
      type: 'HD',
      desc: 'File Receiving Application',
      len: 227,
    },
    '6': {
      type: 'HD',
      desc: 'File Receiving Facility',
      len: 227,
    },
    '7': {
      type: 'DTM',
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
    '13': {
      type: 'HD',
      desc: 'File Sending Network Address',
      opt: 'O',
      rep: 1,
      len: 227,
    },
    '14': {
      type: 'HD',
      desc: 'File Receiving Network Address',
      opt: 'O',
      rep: 1,
      len: 227,
    },
  },
};
