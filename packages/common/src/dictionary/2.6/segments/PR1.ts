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
      type: 'CNE',
      opt: 'R',
      len: 705,
    },
    '5': {
      type: 'DTM',
      opt: 'R',
      len: 24,
    },
    '6': {
      type: 'IS',
      desc: 'Procedure Functional Type',
    },
    '8': {
      rep: 1,
    },
    '11': {
      rep: 1,
    },
    '12': {
      desc: 'Procedure Practitioner',
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
      len: 705,
    },
    '18': {
      type: 'CWE',
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
    '21': {
      type: 'IS',
      desc: 'DRG Procedure Determination Status',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 761,
    },
    '22': {
      type: 'IS',
      desc: 'DRG Procedure Relevance',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 763,
    },
  },
};
