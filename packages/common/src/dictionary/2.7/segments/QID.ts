import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QID: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query Identification',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Query Tag',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Message Query Name',
      opt: 'R',
      rep: 1,
      table: 471,
    },
  },
};
