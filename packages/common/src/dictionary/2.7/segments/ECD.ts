import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ECD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment Command',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Reference Command Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Remote Control Command',
      opt: 'R',
      rep: 1,
      table: 368,
    },
    '3': {
      type: 'ID',
      desc: 'Response Required',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '4': {
      type: 'ST',
      desc: 'Requested Completion Time',
      opt: 'B',
      rep: 1,
    },
    '5': {
      desc: 'Parameters',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
