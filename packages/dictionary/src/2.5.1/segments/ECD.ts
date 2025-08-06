import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ECD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment Command',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Reference Command Number',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'CE',
      desc: 'Remote Control Command',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 368,
    },
    '3': {
      type: 'ID',
      desc: 'Response Required',
      opt: 'O',
      rep: 1,
      len: 80,
      table: 136,
    },
    '4': {
      type: 'TQ',
      desc: 'Requested Completion Time',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '5': {
      desc: 'Parameters',
      opt: 'O',
      rep: 'infinite',
      len: 65536,
    },
  },
};
