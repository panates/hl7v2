import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
      desc: 'Give Code',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Give Amount - Minimum',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Give Amount - Maximum',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      desc: 'Give Units',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Give Dosage Form',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      rep: 1,
    },
    '9': {
      type: 'ID',
      desc: 'Substitution Status',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 167,
    },
    '10': {
      type: 'NM',
      desc: 'Dispense Amount',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Dispense Units',
      rep: 1,
    },
    '12': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
    },
    '15': {
      type: 'ST',
      desc: 'Prescription Number',
      rep: 1,
    },
    '16': {
      type: 'NM',
      desc: 'Number of Refills Remaining',
      rep: 1,
    },
    '17': {
      type: 'NM',
      rep: 1,
    },
    '18': {
      type: 'DTM',
      desc: 'D/T of Most Recent Refill or Dose Dispensed',
      rep: 1,
    },
    '19': {
      desc: 'Total Daily Dose',
      rep: 1,
    },
    '20': {
      type: 'ID',
      desc: 'Needs Human Review',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '21': {
      type: 'CWE',
      opt: 'O',
    },
    '22': {
      type: 'ST',
      rep: 1,
    },
    '23': {
      desc: 'Give Rate Amount',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'CWE',
      desc: 'Give Rate Units',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'CWE',
    },
    '27': {
      type: 'CWE',
      rep: 'infinite',
    },
    '29': {
      type: 'CWE',
    },
    '31': {
      type: 'CWE',
    },
    '32': {
      type: 'DTM',
      desc: 'Original Order Date/Time',
      opt: 'O',
      rep: 1,
    },
    '33': {
      type: 'NM',
      desc: 'Give Drug Strength Volume',
      opt: 'O',
      rep: 1,
    },
    '34': {
      type: 'CWE',
      desc: 'Give Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
    },
    '35': {
      type: 'CWE',
      desc: 'Controlled Substance Schedule',
      opt: 'O',
      rep: 1,
      table: 477,
    },
    '36': {
      type: 'ID',
      desc: 'Formulary Status',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 478,
    },
    '37': {
      type: 'CWE',
      desc: 'Pharmaceutical Substance Alternative',
      opt: 'O',
      rep: 'infinite',
    },
    '38': {
      type: 'CWE',
      desc: 'Pharmacy of Most Recent Fill',
      opt: 'O',
      rep: 1,
    },
    '39': {
      type: 'NM',
      desc: 'Initial Dispense Amount',
      opt: 'O',
      rep: 1,
    },
    '40': {
      type: 'CWE',
      desc: 'Dispensing Pharmacy',
      opt: 'O',
      rep: 1,
    },
    '41': {
      type: 'XAD',
      desc: 'Dispensing Pharmacy Address',
      opt: 'O',
      rep: 1,
    },
    '42': {
      type: 'PL',
      desc: 'Deliver-to Patient Location',
      opt: 'O',
      rep: 1,
    },
    '43': {
      type: 'XAD',
      desc: 'Deliver-to Address',
      opt: 'O',
      rep: 1,
    },
    '44': {
      type: 'ID',
      desc: 'Pharmacy Order Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 480,
    },
  },
};
