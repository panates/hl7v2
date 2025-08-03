import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LCH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Characteristic',
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Segment Action Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 206,
    },
    '3': {
      type: 'EI',
      desc: 'Segment Unique Key',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Location Characteristic ID',
      opt: 'R',
      rep: 1,
      table: 324,
    },
    '5': {
      desc: 'Location Characteristic Value - LCH',
      opt: 'R',
      rep: 1,
    },
  },
};
