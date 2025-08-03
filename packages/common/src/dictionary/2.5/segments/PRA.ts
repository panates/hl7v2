import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PRA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CE',
      desc: 'Primary Key Value - PRA',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'Practitioner Group',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'IS',
      desc: 'Practitioner Category',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 186,
    },
    '4': {
      type: 'ID',
      desc: 'Provider Billing',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 187,
    },
    '5': {
      type: 'SPD',
      desc: 'Specialty',
      opt: 'O',
      rep: 'infinite',
      len: 112,
    },
    '6': {
      type: 'PLN',
      desc: 'Practitioner ID Numbers',
      opt: 'O',
      rep: 'infinite',
      len: 99,
    },
    '7': {
      type: 'PIP',
      desc: 'Privileges',
      opt: 'O',
      rep: 'infinite',
      len: 770,
    },
    '8': {
      type: 'DT',
      desc: 'Date Entered Practice',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '9': {
      table: 537,
    },
  },
};
