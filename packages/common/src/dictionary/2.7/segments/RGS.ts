import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RGS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Resource Group',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - RGS',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Segment Action Code',
      opt: 'C',
      rep: 1,
      len: 1,
      table: 206,
    },
    '3': {
      desc: 'Resource Group ID',
      opt: 'O',
      rep: 1,
    },
  },
};
