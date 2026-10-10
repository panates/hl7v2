import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const IPC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '5': {
      desc: 'Modality ',
    },
    '9': {
      desc: 'Scheduled Station AE Title',
    },
  },
};
