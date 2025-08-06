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
      opt: 'O',
      len: 22,
    },
    '3': {
      type: 'EI',
      opt: 'O',
      rep: 1,
      len: 22,
    },
    '4': {
      type: 'EI',
      opt: 'O',
      rep: 1,
      len: 22,
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
      desc: 'Quantity/Timing',
      rep: 'infinite',
      len: 200,
    },
    '8': {
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '9': {
      type: 'TS',
      desc: 'Date/Time of Transaction',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'XCN',
      opt: 'O',
      len: 250,
    },
    '11': {
      type: 'XCN',
      opt: 'O',
      len: 250,
    },
    '12': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '13': {
      type: 'PL',
      desc: "Enterer's Location",
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '14': {
      opt: 'O',
      len: 250,
    },
    '15': {
      desc: 'Order Effective Date/Time',
    },
    '16': {
      len: 250,
    },
    '17': {
      len: 250,
    },
    '18': {
      len: 250,
    },
    '19': {
      type: 'XCN',
      desc: 'Action By',
      len: 250,
    },
    '20': {
      len: 250,
      table: 339,
    },
    '21': {
      len: 250,
    },
    '22': {
      len: 250,
    },
    '23': {
      len: 250,
    },
    '24': {
      len: 250,
    },
    '25': {
      type: 'CWE',
      desc: 'Order Status Modifier',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '31': {
      type: 'CWE',
      desc: 'Parent Universal Service Identifier',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
