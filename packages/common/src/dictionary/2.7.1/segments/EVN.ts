import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Event Type Code',
    },
    '2': {
      type: 'DTM',
      opt: 'R',
    },
    '3': {
      type: 'DTM',
    },
    '4': {
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
    },
  },
};
