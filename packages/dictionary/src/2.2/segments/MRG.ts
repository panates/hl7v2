import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MRG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CM_PAT_ID',
      desc: 'Prior Patient ID - Internal',
      len: 20,
    },
    '2': {
      type: 'CM_PAT_ID',
      desc: 'Prior Alternate Patient ID',
    },
    '3': {
      desc: 'Prior Patient Account Number',
    },
    '4': {
      type: 'CK',
      desc: 'Prior Patient ID - External',
      opt: 'O',
      rep: 1,
      len: 16,
    },
  },
};
