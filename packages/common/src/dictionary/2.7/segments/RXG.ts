import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Give',
  fields: {
    '3': {
      type: 'ST',
      desc: 'Quantity/Timing',
      opt: 'B',
      rep: 1,
    },
    '4': {
      table: 292,
    },
    '9': {
      rep: 'infinite',
    },
    '11': {
      desc: 'Dispense-To Location',
    },
    '12': {
      table: 136,
    },
    '13': {
      desc: "Pharmacy/Treatment Supplier's Special Administration Instructions",
      len: 250,
    },
    '14': {
      desc: 'Give Per (Time Unit)',
      opt: 'C',
    },
    '15': {
      type: 'ST',
    },
    '17': {
      type: 'NM',
      desc: 'Give Strength',
      opt: 'O',
      rep: 1,
    },
    '18': {
      desc: 'Give Strength Units',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 'infinite',
    },
    '20': {
      desc: 'Substance Expiration Date',
      opt: 'O',
      rep: 'infinite',
    },
    '21': {
      desc: 'Substance Manufacturer Name',
      opt: 'O',
      rep: 'infinite',
      table: 227,
    },
    '22': {
      desc: 'Indication',
      opt: 'O',
    },
  },
};
