import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Dispense',
  fields: {
    '1': {
      opt: 'R',
    },
    '2': {
      desc: 'Dispense/Give Code',
      table: 292,
    },
    '3': {
      desc: 'Date/Time Dispensed',
      opt: 'R',
    },
    '5': {
      opt: 'C',
    },
    '8': {
      opt: 'C',
    },
    '10': {
      type: 'XCN',
    },
    '12': {
      type: 'CQ',
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
    },
    '17': {
      desc: 'Actual Strength Unit',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 'infinite',
    },
    '19': {
      desc: 'Substance Expiration Date',
      opt: 'O',
      rep: 'infinite',
    },
    '20': {
      desc: 'Substance Manufacturer Name',
      opt: 'O',
      rep: 'infinite',
      table: 227,
    },
    '21': {
      desc: 'Indication',
      opt: 'O',
    },
    '22': {
      type: 'NM',
      desc: 'Dispense Package Size',
      opt: 'O',
      rep: 1,
    },
    '23': {
      desc: 'Dispense Package Size Unit',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'ID',
      desc: 'Dispense Package Method',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 321,
    },
    '25': {
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
    },
    '26': {
      desc: 'Initiating Location',
      opt: 'O',
      rep: 1,
    },
    '27': {
      desc: 'Packaging/Assembly Location',
      opt: 'O',
      rep: 1,
    },
    '33': {
      table: 484,
    },
    '34': {
      type: 'XTN',
      desc: 'Pharmacy Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
