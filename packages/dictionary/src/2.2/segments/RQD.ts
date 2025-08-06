import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RQD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition detail',
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
      desc: 'Requisition Unit of measure',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '7': {
      type: 'ID',
      desc: 'Department cost center',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '8': {
      type: 'ID',
      desc: 'Item Natural Account Code',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '9': {
      type: 'CE',
      desc: 'Deliver-to ID',
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
