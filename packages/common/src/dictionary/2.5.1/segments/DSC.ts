import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DSC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Continuation Pointer',
  fields: {
    '1': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Continuation Style',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 398,
    },
  },
};
