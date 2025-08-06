import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CDM: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Primary Key Value - CDM',
    },
    '2': {
      type: 'CWE',
    },
    '6': {
      type: 'CWE',
      table: 132,
    },
    '7': {
      rep: 'infinite',
    },
    '9': {
      type: 'CWE',
    },
    '11': {
      type: 'CX',
    },
    '12': {
      rep: 'infinite',
    },
  },
};
