import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const URD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Results/update Definition',
  fields: {
    '1': {
      type: 'TS',
      desc: 'R/U Date/Time',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 109,
    },
    '3': {
      type: 'XCN',
      opt: 'R',
      rep: 'infinite',
      len: 250,
    },
    '4': {
      type: 'CE',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 48,
    },
    '5': {
      type: 'CE',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '6': {
      type: 'ST',
      desc: 'R/U Display/Print Locations',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 108,
    },
  },
};
