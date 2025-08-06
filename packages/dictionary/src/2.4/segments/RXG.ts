import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Give',
  fields: {
    '3': {
      desc: 'Quantity/Timing',
      opt: 'R',
      rep: 1,
    },
    '4': {
      len: 250,
      table: 292,
    },
    '7': {
      len: 250,
    },
    '8': {
      len: 250,
    },
    '9': {
      type: 'CE',
      rep: 'infinite',
      len: 250,
    },
    '11': {
      desc: 'Dispense-To Location',
      len: 200,
    },
    '12': {
      table: 136,
    },
    '13': {
      desc: "Pharmacy/Treatment Supplier's Special Administration Instructions",
      len: 250,
    },
    '15': {
      type: 'ST',
    },
    '16': {
      len: 250,
    },
    '17': {
      type: 'NM',
      desc: 'Give Strength',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '18': {
      type: 'CE',
      desc: 'Give Strength Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '19': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '20': {
      type: 'TS',
      desc: 'Substance Expiration Date',
      opt: 'O',
      rep: 'infinite',
      len: 26,
    },
    '21': {
      type: 'CE',
      desc: 'Substance Manufacturer Name',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 227,
    },
    '22': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      len: 250,
    },
  },
};
