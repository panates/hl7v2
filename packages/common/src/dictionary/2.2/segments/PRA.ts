import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PRA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Practitioner detail',
  fields: {
    '1': {
      type: 'ST',
      desc: 'PRA - primary key value',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'CE',
      desc: 'Practitioner group',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '3': {
      type: 'ID',
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
      type: 'CM_SPD',
      desc: 'Specialty',
      opt: 'O',
      rep: 'infinite',
      len: 100,
    },
    '6': {
      type: 'CM_PLN',
      desc: 'Practitioner ID Numbers',
      opt: 'O',
      rep: 'infinite',
      len: 100,
    },
    '7': {
      type: 'CM_PIP',
      desc: 'Privileges',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
  },
};
