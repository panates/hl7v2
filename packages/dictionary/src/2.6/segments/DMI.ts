import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const DMI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'DRG Master File Information Segment',
  fields: {
    '1': {
      type: 'CNE',
      desc: 'Diagnostic Related Group',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 55,
    },
    '2': {
      type: 'CNE',
      desc: 'Major Diagnostic Category',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 118,
    },
    '3': {
      type: 'NR',
      desc: 'Lower and Upper Trim Points',
      opt: 'O',
      rep: 1,
      len: 7,
    },
    '4': {
      type: 'NM',
      desc: 'Average Length of Stay',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '5': {
      type: 'NM',
      desc: 'Relative Weight',
      opt: 'O',
      rep: 1,
      len: 7,
    },
  },
};
