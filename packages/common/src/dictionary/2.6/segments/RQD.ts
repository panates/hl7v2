import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RQD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      desc: 'Requisition Line Number',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      desc: 'Item Code - Internal',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CWE',
      desc: 'Item Code - External',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Hospital Item Code',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Requisition Quantity',
      opt: 'O',
      rep: 1,
      len: 6,
    },
    '6': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'IS',
      desc: 'Dept. Cost Center',
      opt: 'O',
      rep: 1,
      len: 30,
      table: 319,
    },
    '8': {
      type: 'IS',
      desc: 'Item Natural Account Code',
      opt: 'O',
      rep: 1,
      len: 30,
      table: 320,
    },
    '9': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'DT',
      desc: 'Date Needed',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
