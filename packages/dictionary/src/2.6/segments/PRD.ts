import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Provider Role',
      len: 705,
    },
    '3': {
      rep: 'infinite',
    },
    '6': {
      type: 'CWE',
      len: 705,
    },
    '7': {
      type: 'PLN',
      table: 338,
    },
    '8': {
      type: 'DTM',
      desc: 'Effective Start Date of Provider Role',
      len: 24,
    },
    '9': {
      type: 'DTM',
      desc: 'Effective End Date of Provider Role',
      rep: 'infinite',
      len: 24,
    },
    '10': {
      type: 'XON',
      desc: 'Provider Organization Name and Identifier',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '11': {
      type: 'XAD',
      desc: 'Provider Organization Address',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '12': {
      type: 'PL',
      desc: 'Provider Organization Location Information',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '13': {
      type: 'XTN',
      desc: 'Provider Organization Communication Information',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '14': {
      type: 'CWE',
      desc: 'Provider Organization Method of Contact',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 185,
    },
  },
};
