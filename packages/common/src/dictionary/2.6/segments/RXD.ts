import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Dispense Sub-ID Counter',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'DTM',
      rep: 1,
      len: 24,
    },
    '4': {
      type: 'NM',
      desc: 'Actual Dispense Amount',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'CWE',
      desc: 'Actual Dispense Units',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Actual Dosage Form',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Prescription Number',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '8': {
      type: 'NM',
      desc: 'Number of Refills Remaining',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '9': {
      type: 'ST',
      desc: 'Dispense Notes',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '10': {
      desc: 'Dispensing Provider',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '11': {
      type: 'ID',
      desc: 'Substitution Status',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 167,
    },
    '12': {
      desc: 'Total Daily Dose',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '13': {
      type: 'LA2',
      desc: 'Dispense-to Location',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ID',
      desc: 'Needs Human Review',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '15': {
      type: 'CWE',
      opt: 'O',
    },
    '17': {
      type: 'CWE',
    },
    '19': {
      type: 'DTM',
      len: 24,
    },
    '20': {
      type: 'CWE',
    },
    '21': {
      type: 'CWE',
      rep: 'infinite',
    },
    '23': {
      type: 'CWE',
    },
    '25': {
      type: 'CWE',
    },
    '26': {
      type: 'CWE',
    },
    '27': {
      type: 'CWE',
    },
    '28': {
      type: 'NM',
      desc: 'Actual Drug Strength Volume',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '29': {
      type: 'CWE',
      desc: 'Actual Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '30': {
      type: 'CWE',
      desc: 'Dispense to Pharmacy',
      opt: 'O',
      rep: 1,
      len: 180,
    },
    '31': {
      type: 'XAD',
      desc: 'Dispense to Pharmacy Address',
      opt: 'O',
      rep: 1,
      len: 106,
    },
    '32': {
      type: 'ID',
      desc: 'Pharmacy Order Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 480,
    },
    '33': {
      type: 'CWE',
      desc: 'Dispense Type',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
