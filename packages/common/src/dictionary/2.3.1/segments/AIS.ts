import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment information - service segment',
  fields: {
    '3': {
      desc: 'Universal Service ID',
    },
  },
};
