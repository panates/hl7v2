import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QAK: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query Acknowledgement',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Query tag',
      opt: 'O',
      rep: 1,
      len: 32,
    },
    '2': {
      type: 'ID',
      desc: 'Query response status',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 208,
    },
  },
};
