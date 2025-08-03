import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const URD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Results/update Definition',
  fields: {
    '1': {
      desc: 'R/U Date/Time',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 109,
    },
    '3': {
      type: 'XCN',
      opt: 'R',
      rep: 'infinite',
    },
    '4': {
      opt: 'O',
      rep: 'infinite',
      table: 48,
    },
    '5': {
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'ST',
      desc: 'R/U Display/Print Locations',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 108,
    },
  },
};
