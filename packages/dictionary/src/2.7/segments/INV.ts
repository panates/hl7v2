import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const INV: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Inventory Detail',
  fields: {
    '1': {
      desc: 'Substance Identifier',
      opt: 'R',
      rep: 1,
      table: 451,
    },
    '2': {
      desc: 'Substance Status',
      opt: 'R',
      rep: 'infinite',
      table: 383,
    },
    '3': {
      desc: 'Substance Type',
      opt: 'O',
      rep: 1,
      table: 384,
    },
    '4': {
      desc: 'Inventory Container Identifier',
      opt: 'O',
      rep: 1,
    },
    '5': {
      desc: 'Container Carrier Identifier',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Position on Carrier',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Initial Quantity',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Current Quantity',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Available Quantity',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'NM',
      desc: 'Consumption Quantity',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Quantity Units',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Expiration Date/Time',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'First Used Date/Time',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ST',
      desc: 'On Board Stability Duration',
      opt: 'B',
      rep: 1,
    },
    '15': {
      desc: 'Test/Fluid Identifier(s)',
      opt: 'O',
      rep: 'infinite',
    },
    '16': {
      type: 'ST',
      desc: 'Manufacturer Lot Number',
      opt: 'O',
      rep: 1,
    },
    '17': {
      desc: 'Manufacturer Identifier',
      opt: 'O',
      rep: 1,
      table: 385,
    },
    '18': {
      desc: 'Supplier Identifier',
      opt: 'O',
      rep: 1,
      table: 386,
    },
    '19': {
      desc: 'On Board Stability Time ',
    },
  },
};
