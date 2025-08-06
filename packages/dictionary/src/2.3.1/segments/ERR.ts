import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ELD',
      desc: 'Error Code and Location',
    },
  },
};
