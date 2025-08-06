import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
      len: 10,
      table: 126,
    },
    '3': {
      type: 'CE',
      desc: 'Response Modality',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 394,
    },
    '4': {
      type: 'TS',
      desc: 'Execution and Delivery Time',
      opt: 'O',
      rep: 1,
      len: 26,
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
      len: 512,
    },
    '7': {
      type: 'ID',
      desc: 'Segment group inclusion',
      opt: 'O',
      rep: 'infinite',
      len: 256,
    },
  },
};
