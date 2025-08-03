import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RQD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition detail segment',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Requisition Line Number',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Item Code - Internal',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Item Code - External',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'CE',
      desc: 'Hospital Item Code',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'NM',
      desc: 'Requisition Quantity',
      opt: 'O',
      rep: 1,
      len: 6,
    },
    '6': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 60,
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
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 60,
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
