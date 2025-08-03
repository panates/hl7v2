import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event type segment',
  fields: {
    '1': {
      desc: 'Event Type Code',
      opt: 'O',
    },
    '2': {
      opt: 'R',
      len: 26,
    },
    '3': {
      len: 26,
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
  },
};
