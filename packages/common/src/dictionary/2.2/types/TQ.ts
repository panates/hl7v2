import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const TQ: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Timing Quantity',
  fields: {
    '1': {
      type: 'CQ_QUANTITY',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CM_RI',
      desc: 'Interval',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Duration',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'TS',
      desc: 'Start Date/time',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'TS',
      desc: 'End Date/time',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ID',
      desc: 'Priority',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Condition',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'TX',
      desc: 'Text',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ID',
      desc: 'Conjunction',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Order Sequencing',
      opt: 'O',
      rep: 1,
    },
  },
};
