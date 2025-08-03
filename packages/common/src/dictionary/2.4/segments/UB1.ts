import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const UB1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'UB82',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - UB1',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Blood Deductible',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '3': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '4': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '5': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '6': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '7': {
      type: 'IS',
      desc: 'Condition Code',
      opt: 'O',
      rep: 5,
      table: 43,
    },
    '8': {
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '9': {
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '10': {
      desc: 'Value Amount & Code',
      opt: 'O',
      rep: 8,
      len: 12,
      table: 153,
    },
    '11': {
      desc: 'Number Of Grace Days',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '12': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 348,
    },
    '13': {
      desc: 'PSRO/UR Approval Indicator',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 349,
    },
    '14': {
      type: 'DT',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '15': {
      type: 'DT',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '16': {
      desc: 'Occurrence',
      opt: 'O',
      rep: 5,
      len: 20,
      table: 350,
    },
    '17': {
      desc: 'Occurrence Span',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 351,
    },
    '18': {
      type: 'DT',
      desc: 'Occur Span Start Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '19': {
      type: 'DT',
      desc: 'Occur Span End Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '20': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '21': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 7,
    },
    '22': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '23': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 17,
    },
  },
};
