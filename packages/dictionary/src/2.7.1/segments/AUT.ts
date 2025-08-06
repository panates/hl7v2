import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AUT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Authorizing Payor, Plan ID',
    },
    '2': {
      type: 'CWE',
    },
    '4': {
      type: 'DTM',
    },
    '5': {
      type: 'DTM',
    },
    '10': {
      type: 'DTM',
    },
  },
};
