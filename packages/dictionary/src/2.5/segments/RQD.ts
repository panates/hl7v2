import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
      type: 'CE',
      desc: 'Item Code - Internal',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CE',
      desc: 'Item Code - External',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CE',
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
      type: 'CE',
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
      type: 'CE',
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
