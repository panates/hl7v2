import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'DTM',
      opt: 'R',
      len: 24,
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
      type: 'DTM',
      len: 24,
    },
    '7': {
      desc: 'Quantity Limited Request',
      len: 10,
    },
    '8': {
      desc: 'Who Subject Filter',
    },
    '9': {
      type: 'CWE',
      desc: 'What Subject Filter',
    },
    '10': {
      type: 'CWE',
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
