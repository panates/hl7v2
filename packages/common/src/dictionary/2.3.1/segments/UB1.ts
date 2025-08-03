import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const UB1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'UB82 data segment',
  fields: {
    '2': {
      type: 'NM',
    },
    '3': {
      type: 'NM',
      desc: 'Blood Furnished-Pints Of',
    },
    '4': {
      type: 'NM',
      desc: 'Blood Replaced-Pints',
    },
    '5': {
      type: 'NM',
      desc: 'Blood Not Replaced-Pints',
    },
    '6': {
      type: 'NM',
      desc: 'Co-Insurance Days',
    },
    '7': {
      len: 14,
    },
    '8': {
      type: 'NM',
      desc: 'Covered Days -',
    },
    '9': {
      type: 'NM',
      desc: 'Non Covered Days -',
    },
    '10': {
      type: 'UVC',
    },
    '11': {
      type: 'NM',
    },
    '12': {
      desc: 'Special Program Indicator',
    },
    '13': {
      type: 'CE',
    },
    '14': {
      desc: 'PSRO/UR Approved Stay-Fm',
    },
    '15': {
      desc: 'PSRO/UR Approved Stay-To',
    },
    '16': {
      type: 'OCD',
    },
    '17': {
      type: 'CE',
      len: 60,
    },
    '20': {
      desc: 'UB-82 Locator 2',
    },
    '21': {
      desc: 'UB-82 Locator 9',
    },
    '22': {
      desc: 'UB-82 Locator 27',
    },
    '23': {
      desc: 'UB-82 Locator 45',
    },
  },
};
