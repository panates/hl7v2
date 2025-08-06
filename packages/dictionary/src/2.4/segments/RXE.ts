import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Encoded Order',
  fields: {
    '1': {
      desc: 'Quantity/Timing',
      opt: 'R',
      rep: 1,
    },
    '2': {
      len: 250,
      table: 292,
    },
    '5': {
      len: 250,
    },
    '6': {
      len: 250,
    },
    '7': {
      desc: "Provider's Administration Instructions",
      len: 250,
    },
    '8': {
      desc: 'Deliver-To Location',
      len: 200,
    },
    '11': {
      len: 250,
    },
    '12': {
      desc: 'Number of Refills',
    },
    '13': {
      desc: "Ordering Provider's DEA Number",
      len: 250,
    },
    '14': {
      desc: "Pharmacist/Treatment Supplier's Verifier ID",
      len: 250,
    },
    '15': {
      opt: 'O',
    },
    '17': {
      desc: 'Number of Refills/Doses Dispensed',
    },
    '19': {
      type: 'CQ',
    },
    '20': {
      table: 136,
    },
    '21': {
      desc: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      rep: 'infinite',
      len: 250,
    },
    '23': {
      type: 'ST',
    },
    '24': {
      len: 250,
    },
    '25': {
      type: 'NM',
      desc: 'Give Strength',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '26': {
      type: 'CE',
      desc: 'Give Strength Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '27': {
      type: 'CE',
      desc: 'Give Indication',
      opt: 'O',
      len: 250,
    },
    '28': {
      type: 'NM',
      desc: 'Dispense Package Size',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '29': {
      type: 'CE',
      desc: 'Dispense Package Size Unit',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '30': {
      type: 'ID',
      desc: 'Dispense Package Method',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 321,
    },
    '31': {
      type: 'CE',
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
  },
};
