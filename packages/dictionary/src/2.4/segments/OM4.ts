import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM4: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observations that Require Specimens',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      len: 4,
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
      len: 20,
    },
    '5': {
      type: 'CE',
      desc: 'Container Units',
      len: 250,
    },
    '6': {
      desc: 'Specimen',
      len: 250,
    },
    '7': {
      desc: 'Additive',
      len: 250,
      table: 371,
    },
    '8': {
      type: 'TX',
      desc: 'Preparation',
      len: 10240,
    },
    '9': {
      desc: 'Special Handling Requirements',
    },
    '10': {
      type: 'CQ',
      desc: 'Normal Collection Volume',
      len: 20,
    },
    '11': {
      type: 'CQ',
      desc: 'Minimum Collection Volume',
    },
    '12': {
      type: 'TX',
      desc: 'Specimen Requirements',
      len: 10240,
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
      len: 20,
    },
  },
};
