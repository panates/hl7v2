import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Encoded Order',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Quantity/Timing',
      opt: 'B',
      rep: 1,
    },
    '7': {
      desc: "Provider's Administration Instructions",
    },
    '8': {
      type: 'ST',
      desc: 'Deliver-to Location',
      opt: 'B',
    },
    '10': {
      opt: 'C',
    },
    '11': {
      opt: 'C',
    },
    '12': {
      desc: 'Number of Refills',
    },
    '13': {
      desc: "Ordering Provider's DEA Number",
    },
    '14': {
      desc: "Pharmacist/Treatment Supplier's Verifier ID",
    },
    '15': {
      opt: 'C',
    },
    '16': {
      opt: 'C',
    },
    '17': {
      desc: 'Number of Refills/Doses Dispensed',
      opt: 'C',
    },
    '18': {
      opt: 'C',
    },
    '19': {
      type: 'CQ',
      opt: 'C',
    },
    '20': {
      table: 136,
    },
    '21': {
      desc: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      rep: 'infinite',
    },
    '22': {
      desc: 'Give Per (Time Unit)',
      opt: 'C',
    },
    '23': {
      type: 'ST',
    },
    '25': {
      type: 'NM',
      desc: 'Give Strength',
      opt: 'O',
      rep: 1,
    },
    '26': {
      desc: 'Give Strength Units',
      opt: 'O',
      rep: 1,
    },
    '27': {
      desc: 'Give Indication',
      opt: 'O',
    },
    '28': {
      type: 'NM',
      desc: 'Dispense Package Size',
      opt: 'O',
      rep: 1,
    },
    '29': {
      desc: 'Dispense Package Size Unit',
      opt: 'O',
      rep: 1,
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
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
    },
    '45': {
      type: 'XTN',
      desc: 'Pharmacy Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
