import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master File Entry',
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
  },
};
