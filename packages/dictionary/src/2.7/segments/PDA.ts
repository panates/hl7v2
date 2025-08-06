import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PDA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Death Cause Code',
      opt: 'O',
      rep: 'infinite',
    },
    '2': {
      type: 'PL',
      desc: 'Death Location',
      opt: 'O',
      rep: 1,
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
      desc: 'Death Certificate Signed Date/Time',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'XCN',
      desc: 'Death Certified By',
      opt: 'O',
      rep: 1,
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
    },
    '8': {
      type: 'XCN',
      desc: 'Autopsy Performed By',
      opt: 'O',
      rep: 1,
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
