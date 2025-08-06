import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Dispense',
  fields: {
    '1': {
      opt: 'R',
    },
    '2': {
      desc: 'Dispense/Give Code',
      len: 250,
      table: 292,
    },
    '3': {
      desc: 'Date/Time Dispensed',
      opt: 'R',
    },
    '5': {
      len: 250,
    },
    '6': {
      len: 250,
    },
    '10': {
      type: 'XCN',
    },
    '12': {
      type: 'CQ',
    },
    '13': {
      len: 200,
    },
    '14': {
      table: 136,
    },
    '15': {
      desc: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      rep: 'infinite',
      len: 250,
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
      len: 250,
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
      len: 250,
      table: 227,
    },
    '21': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      len: 250,
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
      len: 250,
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
      type: 'CE',
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '26': {
      type: 'CE',
      desc: 'Initiating Location',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '27': {
      type: 'CE',
      desc: 'Packaging/Assembly Location',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
