import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TCD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Test Code Detail',
  fields: {
    '1': {
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'SN',
      desc: 'Auto-Dilution Factor ',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'SN',
      desc: 'Rerun Dilution Factor ',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'SN',
      desc: 'Pre-Dilution Factor ',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'SN',
      desc: 'Endogenous Content of Pre-Dilution Diluent',
      opt: 'O',
      rep: 1,
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
      desc: 'Analyte Repeat Status',
      opt: 'O',
      rep: 1,
      table: 389,
    },
  },
};
