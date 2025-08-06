import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy encoded order segment',
  fields: {
    '1': {
      desc: 'Quantity/Timing',
      opt: 'R',
      rep: 1,
    },
    '8': {
      desc: 'Deliver To Location',
      len: 200,
    },
    '14': {
      desc: "Pharmacist/Treatment Supplier's Verifier ID",
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
    },
    '23': {
      type: 'ST',
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
      len: 60,
    },
    '27': {
      type: 'CE',
      desc: 'Give Indication',
      opt: 'O',
      rep: 1,
      len: 200,
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
      len: 60,
    },
    '30': {
      type: 'ID',
      desc: 'Dispense Package Method',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 321,
    },
  },
};
