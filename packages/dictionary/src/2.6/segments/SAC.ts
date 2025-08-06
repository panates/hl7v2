import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Specimen Container detail',
  fields: {
    '1': {
      len: 427,
    },
    '2': {
      len: 427,
    },
    '3': {
      len: 427,
    },
    '4': {
      len: 427,
    },
    '5': {
      len: 427,
    },
    '7': {
      type: 'DTM',
      len: 24,
    },
    '8': {
      type: 'CWE',
      len: 705,
    },
    '9': {
      type: 'CWE',
      len: 705,
    },
    '12': {
      type: 'CWE',
      len: 705,
    },
    '15': {
      type: 'CWE',
      len: 705,
    },
    '20': {
      type: 'CWE',
      len: 705,
    },
    '22': {
      desc: 'Available Specimen Volume',
    },
    '24': {
      type: 'CWE',
      desc: 'Volume Units',
      len: 705,
    },
    '25': {
      type: 'CWE',
      len: 705,
    },
    '26': {
      type: 'CWE',
      len: 705,
    },
    '27': {
      type: 'CWE',
      len: 705,
    },
    '28': {
      type: 'CWE',
      len: 705,
      table: 372,
    },
    '30': {
      type: 'CWE',
      len: 705,
    },
    '33': {
      type: 'CWE',
      len: 705,
    },
    '35': {
      type: 'CWE',
      len: 705,
    },
    '37': {
      type: 'CWE',
      len: 705,
    },
    '39': {
      type: 'CWE',
      len: 705,
    },
    '40': {
      type: 'CWE',
      len: 705,
    },
    '41': {
      type: 'CWE',
      len: 705,
    },
    '42': {
      type: 'CWE',
      len: 705,
    },
    '43': {
      type: 'CWE',
      desc: 'Special Handling Code',
      len: 705,
    },
    '44': {
      type: 'CWE',
      len: 705,
    },
  },
};
