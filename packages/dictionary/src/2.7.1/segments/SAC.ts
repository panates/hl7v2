import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Specimen Container detail',
  fields: {
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'CWE',
    },
    '9': {
      type: 'CWE',
    },
    '12': {
      type: 'CWE',
    },
    '15': {
      type: 'CWE',
    },
    '20': {
      type: 'CWE',
    },
    '22': {
      desc: 'Available Specimen Volume',
    },
    '24': {
      type: 'CWE',
      desc: 'Volume Units',
    },
    '25': {
      type: 'CWE',
    },
    '26': {
      type: 'CWE',
    },
    '27': {
      type: 'CWE',
    },
    '28': {
      type: 'CWE',
      table: 372,
    },
    '30': {
      type: 'CWE',
    },
    '33': {
      type: 'CWE',
    },
    '35': {
      type: 'CWE',
    },
    '37': {
      type: 'CWE',
    },
    '39': {
      type: 'CWE',
    },
    '40': {
      type: 'CWE',
    },
    '41': {
      type: 'CWE',
    },
    '42': {
      type: 'CWE',
    },
    '43': {
      type: 'CWE',
      desc: 'Special Handling Code',
    },
    '44': {
      type: 'CWE',
    },
  },
};
