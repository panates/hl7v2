import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MFE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master file entry segment',
  fields: {
    '1': {
      desc: 'Record-Level Event Code',
    },
    '2': {
      desc: 'MFN Control ID',
    },
    '3': {
      desc: 'Effective Date/Time',
    },
    '4': {
      desc: 'Primary Key Value',
    },
  },
};
