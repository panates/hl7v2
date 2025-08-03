import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const QPD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Query Parameter Definition',
  fields: {
    '1': {
      desc: 'Message Query Name ',
      opt: 'R',
      rep: 1,
      table: 471,
    },
    '2': {
      type: 'ST',
      desc: 'Query Tag',
      opt: 'C',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'User Parameters (in successive fields) ',
      opt: 'O',
      rep: 1,
    },
  },
};
