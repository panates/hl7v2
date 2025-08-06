import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Query date / time',
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
      desc: 'Deferred response date / time',
      len: 26,
    },
    '7': {
      type: 'CQ_QUANTITY',
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
      type: 'CM_VR',
      desc: 'What data code value qualifier',
    },
    '12': {
      desc: 'Query Results Level',
    },
  },
};
