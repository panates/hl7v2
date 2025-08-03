import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const APR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Preferences',
  fields: {
    '1': {
      type: 'SCV',
      desc: 'Time Selection Criteria',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
    '2': {
      type: 'SCV',
      desc: 'Resource Selection Criteria',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
    '3': {
      type: 'SCV',
      desc: 'Location Selection Criteria',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
    '4': {
      type: 'NM',
      desc: 'Slot Spacing Criteria',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '5': {
      type: 'SCV',
      desc: 'Filler Override Criteria',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
  },
};
