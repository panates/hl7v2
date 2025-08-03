import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EQL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Embedded Query Language',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'ID',
      desc: 'Query/Response Format Code',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 106,
    },
    '3': {
      type: 'CE',
      desc: 'EQL Query Name',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '4': {
      type: 'ST',
      desc: 'EQL Query Statement',
      opt: 'R',
      rep: 1,
      len: 4096,
    },
  },
};
