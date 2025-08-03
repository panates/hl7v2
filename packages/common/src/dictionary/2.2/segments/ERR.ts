import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CM_ELD',
      desc: 'Error Code and Location',
    },
  },
};
