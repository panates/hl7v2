import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/treatment dispense segment',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Dispense Sub-ID Counter',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CE',
      opt: 'R',
      rep: 1,
      len: 100,
    },
    '3': {
      type: 'TS',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'NM',
      desc: 'Actual Dispense Amount',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'CE',
      desc: 'Actual Dispense Units',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '6': {
      type: 'CE',
      desc: 'Actual Dosage Form',
      opt: 'O',
      rep: 1,
      len: 60,
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
      type: 'CE',
      desc: 'Pharmacy/Treatment Supplier s Special Dispensing Instructions',
      opt: 'O',
      len: 200,
    },
    '21': {
      rep: 'infinite',
    },
  },
};
