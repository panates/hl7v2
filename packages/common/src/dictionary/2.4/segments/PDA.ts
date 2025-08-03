import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PDA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient death and autopsy',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Death Cause Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '2': {
      type: 'PL',
      desc: 'Death Location',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '3': {
      type: 'ID',
      desc: 'Death Certified Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '4': {
      type: 'TS',
      desc: 'Death Certificate Signed Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'XCN',
      desc: 'Death Certified By',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '6': {
      type: 'ID',
      desc: 'Autopsy Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '7': {
      type: 'DR',
      desc: 'Autopsy Start and End Date/Time',
      opt: 'O',
      rep: 1,
      len: 53,
    },
    '8': {
      type: 'XCN',
      desc: 'Autopsy Performed By',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '9': {
      type: 'ID',
      desc: 'Coroner Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
