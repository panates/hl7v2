import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy give segment',
  fields: {
    '1': {
      type: 'ID',
      opt: 'O',
    },
    '2': {
      opt: 'R',
    },
    '3': {
      desc: 'Quantity/Timing',
      opt: 'R',
      rep: 1,
    },
    '9': {
      type: 'CE',
      rep: 'infinite',
    },
    '11': {
      desc: 'Dispense-To Location',
      len: 200,
    },
    '12': {
      table: 136,
    },
    '13': {
      rep: 1,
    },
    '15': {
      type: 'ST',
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
      len: 60,
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
      len: 60,
    },
    '22': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      rep: 1,
      len: 200,
    },
  },
};
