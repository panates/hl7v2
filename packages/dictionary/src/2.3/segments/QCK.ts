import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QCK: DeepPartial<HL7SegmentDefinition> = {
  desc: 'QCK',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Contents',
      opt: 'O',
      rep: 1,
      len: 10000000,
    },
  },
};
