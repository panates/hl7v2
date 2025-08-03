import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM4: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observations that Require Specimens',
  fields: {
    '1': {
      type: 'NM',
    },
    '2': {
      type: 'ID',
      desc: 'Derived Specimen',
      len: 1,
      table: 170,
    },
    '3': {
      type: 'TX',
      desc: 'Container Description',
      len: 60,
    },
    '4': {
      type: 'NM',
      desc: 'Container Volume',
    },
    '5': {
      desc: 'Container Units',
    },
    '6': {
      desc: 'Specimen',
    },
    '7': {
      desc: 'Additive',
      table: 371,
    },
    '8': {
      type: 'TX',
      desc: 'Preparation',
    },
    '9': {
      desc: 'Special Handling Requirements',
    },
    '10': {
      type: 'CQ',
      desc: 'Normal Collection Volume',
    },
    '11': {
      type: 'CQ',
      desc: 'Minimum Collection Volume',
    },
    '12': {
      type: 'TX',
      desc: 'Specimen Requirements',
    },
    '13': {
      type: 'ID',
      desc: 'Specimen Priorities',
      len: 1,
      table: 27,
    },
    '14': {
      type: 'CQ',
      desc: 'Specimen Retention Time',
      rep: 1,
    },
  },
};
