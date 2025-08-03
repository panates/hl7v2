import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NSC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Network Change Type',
    },
    '2': {
      desc: 'Current CPU',
    },
    '3': {
      desc: 'Current Fileserver',
    },
    '4': {
      desc: 'Current Application',
    },
    '5': {
      desc: 'Current Facility',
    },
    '6': {
      desc: 'New CPU',
    },
    '7': {
      desc: 'New Fileserver',
    },
    '8': {
      desc: 'New Application',
    },
    '9': {
      desc: 'New Facility',
    },
  },
};
