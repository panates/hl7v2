import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QRD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Original-style query definition segment',
  fields: {
    '1': {
      opt: 'R',
      len: 26,
    },
    '2': {
      desc: 'Query Format Code',
    },
    '3': {
      desc: 'Query Priority',
    },
    '4': {
      desc: 'Query ID',
    },
    '5': {
      desc: 'Deferred Response Type',
    },
    '6': {
      len: 26,
    },
    '7': {
      desc: 'Quantity Limited Request',
      len: 10,
    },
    '8': {
      desc: 'Who Subject Filter',
    },
    '9': {
      desc: 'What Subject Filter',
    },
    '10': {
      desc: 'What Department Data Code',
    },
    '11': {
      type: 'VR',
      desc: 'What Data Code Value Qual.',
    },
    '12': {
      desc: 'Query Results Level',
    },
  },
};
