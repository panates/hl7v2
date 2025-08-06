import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master File Identification',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Master File Identifier',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 175,
    },
    '2': {
      type: 'HD',
      desc: 'Master File Application Identifier',
      opt: 'O',
      rep: 1,
      len: 180,
    },
    '3': {
      type: 'ID',
      desc: 'File-Level Event Code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 178,
    },
    '4': {
      type: 'TS',
      desc: 'Entered Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'TS',
      desc: 'Effective Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '6': {
      type: 'ID',
      desc: 'Response Level Code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 179,
    },
  },
};
