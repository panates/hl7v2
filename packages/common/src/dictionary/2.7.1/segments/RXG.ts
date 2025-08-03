import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Give Sub-ID Counter',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Dispense Sub-ID Counter',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Give Code',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Give Amount - Minimum',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Give Amount - Maximum',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      desc: 'Give Units',
      opt: 'R',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'Give Dosage Form',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Administration Notes',
      opt: 'O',
    },
    '10': {
      type: 'ID',
      desc: 'Substitution Status',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 167,
    },
    '11': {
      type: 'LA2',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Needs Human Review',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '13': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      type: 'ST',
      rep: 1,
    },
    '15': {
      desc: 'Give Rate Amount',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'CWE',
      desc: 'Give Rate Units',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'CWE',
    },
    '20': {
      type: 'DTM',
    },
    '21': {
      type: 'CWE',
    },
    '22': {
      type: 'CWE',
      rep: 'infinite',
    },
    '23': {
      type: 'NM',
      desc: 'Give Drug Strength Volume',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'CWE',
      desc: 'Give Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'CWE',
      desc: 'Give Barcode Identifier',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'ID',
      desc: 'Pharmacy Order Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 480,
    },
    '27': {
      type: 'CWE',
      desc: 'Dispense to Pharmacy',
      opt: 'O',
      rep: 1,
    },
    '28': {
      type: 'XAD',
      desc: 'Dispense to Pharmacy Address',
      opt: 'O',
      rep: 1,
    },
    '29': {
      type: 'PL',
      desc: 'Deliver-to Patient Location',
      opt: 'O',
      rep: 1,
    },
    '30': {
      type: 'XAD',
      desc: 'Deliver-to Address',
      opt: 'O',
      rep: 1,
    },
  },
};
