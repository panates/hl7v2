import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
    '11': {
      type: 'DTM',
    },
    '12': {
      type: 'DTM',
    },
    '14': {
      type: 'CWE',
    },
  },
};
