import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const DMI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CNE',
      opt: 'O',
      rep: 1,
      table: 55,
    },
    '2': {
      type: 'CNE',
      desc: 'Major Diagnostic Category',
      rep: 1,
      table: 118,
    },
    '3': {
      type: 'NR',
      desc: 'Lower and Upper Trim Points',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Average Length of Stay',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Relative Weight',
      rep: 1,
    },
  },
};
