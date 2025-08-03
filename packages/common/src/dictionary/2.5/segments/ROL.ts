import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ROL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      desc: 'Role-ROL',
      opt: 'R',
    },
    '4': {
      rep: 'infinite',
    },
    '8': {
      desc: 'Role Action Reason',
    },
    '10': {
      desc: 'Organization Unit Type',
    },
    '11': {
      desc: 'Office/Home Address/Birthplace',
    },
  },
};
