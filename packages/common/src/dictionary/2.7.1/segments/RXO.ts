import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXO: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Requested Give Code',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Requested Give Amount - Minimum',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Requested Give Amount - Maximum',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Requested Give Units',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      desc: 'Requested Dosage Form',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      type: 'LA1',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ID',
      desc: 'Allow Substitutions',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 161,
    },
    '10': {
      type: 'CWE',
      desc: 'Requested Dispense Code',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'NM',
      desc: 'Requested Dispense Amount',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'CWE',
      desc: 'Requested Dispense Units',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'NM',
      desc: 'Number Of Refills',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
    },
    '15': {
      type: 'XCN',
      rep: 'infinite',
    },
    '16': {
      type: 'ID',
      desc: 'Needs Human Review',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '17': {
      type: 'ST',
      rep: 1,
    },
    '19': {
      type: 'CWE',
    },
    '20': {
      type: 'CWE',
      rep: 'infinite',
    },
    '22': {
      type: 'CWE',
    },
    '23': {
      type: 'CQ',
      desc: 'Total Daily Dose',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'CWE',
    },
    '25': {
      type: 'NM',
      desc: 'Requested Drug Strength Volume',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'CWE',
      desc: 'Requested Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
    },
    '27': {
      type: 'ID',
      desc: 'Pharmacy Order Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 480,
    },
    '28': {
      type: 'NM',
      desc: 'Dispensing Interval',
      opt: 'O',
      rep: 1,
    },
    '29': {
      type: 'EI',
      desc: 'Medication Instance Identifier',
      opt: 'O',
      rep: 1,
    },
    '30': {
      type: 'EI',
      desc: 'Segment Instance Identifier',
      opt: 'O',
      rep: 1,
    },
    '31': {
      type: 'CNE',
      desc: 'Mood Code',
      rep: 1,
      table: 725,
    },
    '32': {
      type: 'CWE',
      desc: 'Dispensing Pharmacy',
      opt: 'O',
      rep: 1,
    },
    '33': {
      type: 'XAD',
      desc: 'Dispensing Pharmacy Address',
      opt: 'O',
      rep: 1,
    },
    '34': {
      type: 'PL',
      desc: 'Deliver-to Patient Location',
      opt: 'O',
      rep: 1,
    },
    '35': {
      type: 'XAD',
      desc: 'Deliver-to Address',
      opt: 'O',
      rep: 1,
    },
  },
};
