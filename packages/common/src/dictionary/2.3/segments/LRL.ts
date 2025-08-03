import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LRL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Relationship',
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
      desc: 'Location Relationship ID',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '5': {
      type: 'XON',
      desc: 'Organizational Location Relationship Value',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'PL',
      desc: 'Patient Location Relationship Value',
      opt: 'O',
      rep: 1,
      len: 80,
    },
  },
};
