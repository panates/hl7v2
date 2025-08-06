import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VAR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Variance',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Variance Instance ID',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Documented Date/Time',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Stated Variance Date/Time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'XCN',
      desc: 'Variance Originator',
      opt: 'O',
    },
    '5': {
      desc: 'Variance Classification',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Variance Description',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
