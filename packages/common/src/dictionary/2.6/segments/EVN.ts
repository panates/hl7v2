import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Event Type Code',
      opt: 'O',
    },
    '2': {
      type: 'DTM',
      opt: 'R',
      len: 24,
    },
    '3': {
      type: 'DTM',
      len: 24,
    },
    '4': {
      type: 'IS',
      desc: 'Event Reason Code',
    },
    '5': {
      type: 'XCN',
      desc: 'Operator ID',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'DTM',
      len: 24,
    },
    '7': {
      len: 241,
    },
  },
};
