import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const UB1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - UB82',
    },
    '2': {
      type: 'NM',
    },
    '3': {
      type: 'NM',
      desc: 'Blood furnished pints of',
    },
    '4': {
      type: 'NM',
      desc: 'Blood replaced pints',
    },
    '5': {
      type: 'NM',
      desc: 'Blood not replaced pints',
    },
    '6': {
      type: 'NM',
    },
    '8': {
      type: 'NM',
      desc: 'Covered days',
    },
    '9': {
      type: 'NM',
      desc: 'Non-covered days',
    },
    '10': {
      type: 'CM_UVC',
      desc: 'Value amount and code',
    },
    '11': {
      type: 'NM',
    },
    '12': {
      desc: 'Special program indicator',
    },
    '13': {
      desc: 'PSRO / UR approval indicator',
    },
    '14': {
      desc: 'PSRO / UR approved stay - from',
    },
    '15': {
      desc: 'PSRO / UR approved stay - to',
    },
    '16': {
      type: 'CM_OCD',
    },
    '19': {
      desc: 'Occurrence span end date',
    },
    '20': {
      desc: 'UB-82 locator 2',
    },
    '21': {
      desc: 'UB-82 locator 9',
    },
    '22': {
      desc: 'UB-82 locator 27',
    },
    '23': {
      desc: 'UB-82 locator 45',
    },
  },
};
