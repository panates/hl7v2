import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Primary Key Value - PRC',
    },
    '2': {
      type: 'CWE',
      desc: 'Facility ID - PRC',
      opt: 'O',
    },
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'IS',
    },
    '11': {
      type: 'DTM',
      len: 24,
    },
    '12': {
      type: 'DTM',
      len: 24,
    },
    '13': {
      type: 'IS',
    },
    '14': {
      type: 'CWE',
    },
    '18': {
      type: 'IS',
    },
  },
};
