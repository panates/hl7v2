import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EVN: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Event Type Code',
    },
    '2': {
      desc: 'Date / time of event',
      len: 26,
    },
    '3': {
      desc: 'Date / time planned event',
      len: 26,
    },
    '4': {
      desc: 'Event Reason Code',
    },
    '5': {
      type: 'ID',
      desc: 'Operator ID',
      opt: 'O',
      rep: 1,
      len: 5,
      table: 188,
    },
  },
};
