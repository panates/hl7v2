import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy dispense segment',
  fields: {
    '1': {
      opt: 'R',
    },
    '2': {
      desc: 'Dispense/Give Code',
    },
    '3': {
      desc: 'Date/Time Dispensed',
      opt: 'R',
    },
    '9': {
      type: 'CE',
    },
    '10': {
      type: 'XCN',
    },
    '12': {
      type: 'CQ',
    },
    '13': {
      desc: 'Dispense-To Location',
      len: 200,
    },
    '14': {
      table: 136,
    },
    '15': {
      desc: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      rep: 'infinite',
    },
    '16': {
      type: 'NM',
      desc: 'Actual Strength',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '17': {
      type: 'CE',
      desc: 'Actual Strength Unit',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '18': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '19': {
      type: 'TS',
      desc: 'Substance Expiration Date',
      opt: 'O',
      rep: 'infinite',
      len: 26,
    },
    '20': {
      type: 'CE',
      desc: 'Substance Manufacturer Name',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '21': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '22': {
      type: 'NM',
      desc: 'Dispense Package Size',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '23': {
      type: 'CE',
      desc: 'Dispense Package Size Unit',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '24': {
      type: 'ID',
      desc: 'Dispense Package Method',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 321,
    },
  },
};
