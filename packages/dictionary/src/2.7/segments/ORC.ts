import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ORC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Common Order',
  fields: {
    '1': {
      opt: 'R',
      rep: 1,
      len: 2,
    },
    '2': {
      type: 'EI',
      opt: 'C',
    },
    '3': {
      type: 'EI',
      opt: 'C',
      rep: 1,
    },
    '4': {
      type: 'EI',
      opt: 'O',
      rep: 1,
    },
    '5': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '6': {
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Quantity/Timing',
      opt: 'B',
      rep: 'infinite',
    },
    '8': {
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Date/Time of Transaction',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'XCN',
      opt: 'O',
    },
    '11': {
      type: 'XCN',
      opt: 'O',
    },
    '12': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
    },
    '13': {
      type: 'PL',
      desc: "Enterer's Location",
      opt: 'O',
      rep: 1,
    },
    '14': {
      opt: 'O',
      rep: 2,
    },
    '15': {
      desc: 'Order Effective Date/Time',
    },
    '19': {
      type: 'XCN',
      desc: 'Action By',
    },
    '20': {
      table: 339,
    },
    '25': {
      type: 'CWE',
      desc: 'Order Status Modifier',
      opt: 'O',
      rep: 1,
    },
    '26': {
      opt: 'C',
    },
    '31': {
      type: 'CWE',
      desc: 'Parent Universal Service Identifier',
      opt: 'O',
      rep: 1,
    },
    '32': {
      type: 'DT',
      desc: 'Advanced Beneficiary Notice Date',
      opt: 'O',
      rep: 1,
    },
    '33': {
      type: 'CX',
      desc: 'Alternate Placer Order Number',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
