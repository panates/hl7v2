import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LRL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Relationship',
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
      desc: 'Location Relationship ID',
      opt: 'R',
      rep: 1,
      table: 325,
    },
    '5': {
      type: 'XON',
      desc: 'Organizational Location Relationship Value',
      opt: 'C',
    },
    '6': {
      type: 'PL',
      desc: 'Patient Location Relationship Value',
      opt: 'C',
      rep: 1,
    },
  },
};
