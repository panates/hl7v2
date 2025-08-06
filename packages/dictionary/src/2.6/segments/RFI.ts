import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RFI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Request for Information',
  fields: {
    '1': {
      type: 'DTM',
      desc: 'Request Date',
      opt: 'R',
      rep: 1,
      len: 24,
    },
    '2': {
      type: 'DTM',
      desc: 'Response Due Date',
      opt: 'R',
      rep: 1,
      len: 24,
    },
    '3': {
      type: 'ID',
      desc: 'Patient Consent',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '4': {
      type: 'DTM',
      desc: 'Date Additional Information was submitted',
      opt: 'O',
      rep: 1,
      len: 24,
    },
  },
};
