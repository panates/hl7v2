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
      table: 294,
    },
    '2': {
      type: 'SCV',
      desc: 'Resource Selection Criteria',
      opt: 'O',
      rep: 'infinite',
      table: 294,
    },
    '3': {
      type: 'SCV',
      desc: 'Location Selection Criteria',
      opt: 'O',
      rep: 'infinite',
      table: 294,
    },
    '4': {
      type: 'NM',
      desc: 'Slot Spacing Criteria',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'SCV',
      desc: 'Filler Override Criteria',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
