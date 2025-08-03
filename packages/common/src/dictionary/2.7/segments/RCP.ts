import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RCP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Response Control Parameter',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Query Priority',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 91,
    },
    '2': {
      type: 'CQ',
      desc: 'Quantity Limited Request',
      opt: 'O',
      rep: 1,
      table: 126,
    },
    '3': {
      desc: 'Response Modality',
      opt: 'O',
      rep: 1,
      table: 394,
    },
    '4': {
      desc: 'Execution and Delivery Time',
      opt: 'C',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Modify Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 395,
    },
    '6': {
      type: 'SRT',
      desc: 'Sort-by Field',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      type: 'ID',
      desc: 'Segment group inclusion ',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
