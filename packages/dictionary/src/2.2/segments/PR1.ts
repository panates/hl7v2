import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PR1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - procedure',
      rep: 1,
    },
    '2': {
      desc: 'Procedure coding method',
      rep: 'infinite',
    },
    '3': {
      rep: 'infinite',
    },
    '4': {
      rep: 'infinite',
    },
    '5': {
      desc: 'Procedure date / time',
      len: 26,
    },
    '12': {
      type: 'CM_PRACTITIONER',
      desc: 'Procedure Practitioner',
      rep: 'infinite',
    },
    '14': {
      type: 'NM',
      desc: 'Procedure priority',
      opt: 'O',
      rep: 1,
      len: 2,
    },
  },
};
