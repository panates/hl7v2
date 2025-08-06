import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PR1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - PR1',
      rep: 1,
    },
    '3': {
      type: 'CNE',
      opt: 'R',
    },
    '5': {
      type: 'DTM',
      opt: 'R',
    },
    '6': {
      desc: 'Procedure Functional Type',
    },
    '8': {
      rep: 1,
    },
    '11': {
      rep: 1,
    },
    '12': {
      rep: 1,
    },
    '13': {
      type: 'CWE',
    },
    '14': {
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '15': {
      type: 'CWE',
    },
    '16': {
      type: 'CNE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      type: 'EI',
      desc: 'Procedure Identifier',
      rep: 1,
    },
    '20': {
      type: 'ID',
      desc: 'Procedure Action Code',
      rep: 1,
      len: 1,
      table: 206,
    },
    '21': {
      opt: 'O',
      rep: 1,
      table: 761,
    },
    '22': {
      desc: 'DRG Procedure Relevance',
      opt: 'O',
      rep: 1,
      table: 763,
    },
  },
};
