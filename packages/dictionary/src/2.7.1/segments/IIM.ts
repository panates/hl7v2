import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IIM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Inventory Item Master',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Primary Key Value - IIM',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Service Item Code',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Inventory Lot Number',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'DTM',
      desc: 'Inventory Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      desc: 'Inventory Manufacturer Name',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Inventory Location',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DTM',
      desc: 'Inventory Received Date',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Inventory Received Quantity',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Inventory Received Quantity Unit',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'MO',
      desc: 'Inventory Received Item Cost',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'DTM',
      desc: 'Inventory On Hand Date',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'NM',
      desc: 'Inventory On Hand Quantity',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      desc: 'Inventory On Hand Quantity Unit',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'CNE',
      desc: 'Procedure Code',
      opt: 'O',
      rep: 1,
      table: 88,
    },
    '15': {
      type: 'CNE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
      table: 340,
    },
  },
};
