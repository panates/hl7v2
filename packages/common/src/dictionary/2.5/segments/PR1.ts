import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PR1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - PR1',
      rep: 1,
    },
    '2': {
      opt: 'O',
    },
    '3': {
      opt: 'R',
    },
    '5': {
      opt: 'R',
      len: 26,
    },
    '6': {
      type: 'IS',
      desc: 'Procedure Functional Type',
    },
    '12': {
      desc: 'Procedure Practitioner',
      rep: 'infinite',
    },
    '14': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '16': {
      type: 'CE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
    },
    '19': {
      type: 'EI',
      desc: 'Procedure Identifier',
      opt: 'O',
      rep: 1,
      len: 427,
    },
    '20': {
      type: 'ID',
      desc: 'Procedure Action Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 206,
    },
  },
};
