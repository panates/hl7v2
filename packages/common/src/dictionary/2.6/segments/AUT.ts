import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
      len: 24,
    },
    '5': {
      type: 'DTM',
      len: 24,
    },
    '10': {
      type: 'DTM',
      len: 24,
    },
  },
};
