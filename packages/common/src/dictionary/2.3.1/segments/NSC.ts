import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NSC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Application status change',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Network Change Type',
      table: 333,
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
      type: 'ST',
      desc: 'New Facility',
      opt: 'O',
      rep: 1,
    },
  },
};
