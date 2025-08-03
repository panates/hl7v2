import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ACC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Accident date / time',
      len: 26,
    },
  },
};
