import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LCH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Characteristic',
  fields: {
    '1': {
      type: 'PL',
      desc: 'Primary Key Value',
      opt: 'R',
      rep: 1,
      len: 20,
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
      type: 'EI',
      desc: 'Segment Unique Key',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '4': {
      type: 'CE',
      desc: 'Location Characteristic ID',
      opt: 'R',
      rep: 1,
      len: 80,
    },
    '5': {
      type: 'CE',
      desc: 'Location Characteristic Value',
      opt: 'R',
      rep: 1,
      len: 80,
    },
  },
};
