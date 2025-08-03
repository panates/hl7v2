import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BPX: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Blood product dispense status',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      desc: 'BP Dispense Status',
      opt: 'R',
      rep: 1,
      table: 510,
    },
    '3': {
      type: 'ID',
      desc: 'BP Status',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 511,
    },
    '4': {
      type: 'DTM',
      desc: 'BP Date/Time of Status',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'EI',
      rep: 1,
    },
    '6': {
      type: 'CNE',
      rep: 1,
    },
    '7': {
      type: 'CNE',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      rep: 1,
      table: 512,
    },
    '9': {
      type: 'XON',
      rep: 1,
    },
    '10': {
      type: 'EI',
      rep: 1,
    },
    '11': {
      type: 'CNE',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'CNE',
      opt: 'O',
      rep: 'infinite',
    },
    '13': {
      type: 'DTM',
      desc: 'BP Expiration Date/Time',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'NM',
      desc: 'BP Quantity',
      opt: 'R',
      rep: 1,
    },
    '15': {
      type: 'NM',
      desc: 'BP Amount',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'CWE',
      desc: 'BP Units',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'EI',
      desc: 'BP Unique ID',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'PL',
      desc: 'BP Actual Dispensed To Location',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'XAD',
      desc: 'BP Actual Dispensed To Address',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'XCN',
      desc: 'BP Dispensed to Receiver',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'XCN',
      desc: 'BP Dispensing Individual',
      opt: 'O',
      rep: 1,
    },
  },
};
