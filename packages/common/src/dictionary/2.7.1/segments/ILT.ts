import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ILT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set Id - ILT',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ST',
      desc: 'Inventory Lot Number',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'DTM',
      desc: 'Inventory Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DTM',
      desc: 'Inventory Received Date',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Inventory Received Quantity',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Inventory Received Quantity Unit',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'MO',
      desc: 'Inventory Received Item Cost',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'DTM',
      desc: 'Inventory On Hand Date',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Inventory On Hand Quantity',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'CWE',
      desc: 'Inventory On Hand Quantity Unit',
      opt: 'O',
      rep: 1,
    },
  },
};
