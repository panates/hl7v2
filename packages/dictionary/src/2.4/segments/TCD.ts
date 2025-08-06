import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TCD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Test Code Detail',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '2': {
      type: 'SN',
      desc: 'Auto-Dilution Factor',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'SN',
      desc: 'Rerun Dilution Factor',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '4': {
      type: 'SN',
      desc: 'Pre-Dilution Factor',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'SN',
      desc: 'Endogenous Content of Pre-Dilution Diluent',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '6': {
      type: 'ID',
      desc: 'Automatic Repeat Allowed',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '7': {
      type: 'ID',
      desc: 'Reflex Allowed',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '8': {
      type: 'CE',
      desc: 'Analyte Repeat Status',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 389,
    },
  },
};
