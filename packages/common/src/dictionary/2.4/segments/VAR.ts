import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const VAR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Variance',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Variance Instance ID',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'TS',
      desc: 'Documented Date/Time',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'TS',
      desc: 'Stated Variance Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'XCN',
      desc: 'Variance Originator',
      opt: 'O',
      len: 250,
    },
    '5': {
      type: 'CE',
      desc: 'Variance Classification',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '6': {
      type: 'ST',
      desc: 'Variance Description',
      opt: 'O',
      rep: 'infinite',
      len: 512,
    },
  },
};
