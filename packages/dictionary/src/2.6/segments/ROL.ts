import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ROL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'CWE',
      desc: 'Role-ROL',
      opt: 'R',
    },
    '4': {
      rep: 'infinite',
    },
    '5': {
      type: 'DTM',
      len: 24,
    },
    '6': {
      type: 'DTM',
      len: 24,
    },
    '7': {
      type: 'CWE',
    },
    '8': {
      type: 'CWE',
      desc: 'Role Action Reason',
    },
    '9': {
      type: 'CWE',
    },
    '10': {
      type: 'CWE',
      desc: 'Organization Unit Type',
    },
    '11': {
      desc: 'Office/Home Address/Birthplace',
    },
    '13': {
      type: 'PL',
      desc: "Person's Location",
      opt: 'O',
      rep: 1,
      len: 1230,
    },
  },
};
