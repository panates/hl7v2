import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RQD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition Detail',
  fields: {
    '2': {
      len: 250,
    },
    '3': {
      len: 250,
    },
    '4': {
      len: 250,
    },
    '6': {
      desc: 'Requisition Unit of Measure',
      len: 250,
    },
    '9': {
      desc: 'Deliver To ID',
      len: 250,
    },
  },
};
