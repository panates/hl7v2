import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SCP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilizer Configuration (Anti-Microbial Devices)',
  fields: {
    '1': {
      desc: 'Number Of Decontamination/Sterilization Devices ',
    },
  },
};
