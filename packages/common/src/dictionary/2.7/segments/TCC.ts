import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const TCC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Test Code Configuration',
  fields: {
    '1': {
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Equipment Test Application Identifier',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Specimen Source',
      opt: 'B',
      rep: 1,
    },
    '4': {
      type: 'SN',
      desc: 'Auto-Dilution Factor Default',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'SN',
      desc: 'Rerun Dilution Factor Default',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'SN',
      desc: 'Pre-Dilution Factor Default',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'SN',
      desc: 'Endogenous Content of Pre-Dilution Diluent',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Inventory Limits Warning Level',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ID',
      desc: 'Automatic Rerun Allowed',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '10': {
      type: 'ID',
      desc: 'Automatic Repeat Allowed',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '11': {
      type: 'ID',
      desc: 'Automatic Reflex Allowed',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '12': {
      type: 'SN',
      desc: 'Equipment Dynamic Range',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Units',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Processing Type',
      opt: 'O',
      rep: 1,
      table: 388,
    },
  },
};
