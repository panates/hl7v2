import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BPO: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Blood product order',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'CWE',
      desc: 'BP  Processing Requirements',
      opt: 'O',
      rep: 'infinite',
      table: 508,
    },
    '4': {
      type: 'NM',
      desc: 'BP Quantity',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'BP Amount',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'BP Units',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DTM',
      desc: 'BP Intended Use Date/Time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'PL',
      desc: 'BP Intended Dispense From Location',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'XAD',
      desc: 'BP Intended Dispense From Address',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'DTM',
      desc: 'BP Requested Dispense Date/Time',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'PL',
      desc: 'BP Requested Dispense To Location',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'XAD',
      desc: 'BP Requested Dispense To Address',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      desc: 'BP Indication for Use',
      opt: 'O',
      rep: 'infinite',
      table: 509,
    },
    '14': {
      type: 'ID',
      desc: 'BP Informed Consent Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
