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
      opt: 'O',
      rep: 1,
      len: 3,
      table: 206,
    },
    '3': {
      type: 'CE',
      desc: 'Resource Group ID',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
