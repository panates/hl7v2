import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const UB1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'UB82',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID   UB1',
      opt: 'B',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Blood Deductible',
      opt: 'B',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Blood Furnished Pints',
      opt: 'B',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Blood Replaced Pints',
      opt: 'B',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Blood Not Replaced Pints',
      opt: 'B',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Co Insurance Days',
      opt: 'B',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Condition Code',
      opt: 'B',
      rep: 5,
    },
    '8': {
      type: 'ST',
      desc: 'Covered Days',
      opt: 'B',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Non Covered Days',
      opt: 'B',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Value Amount & Code',
      opt: 'B',
      rep: 8,
    },
    '11': {
      type: 'ST',
      desc: 'Number Of Grace Days',
      opt: 'B',
      rep: 1,
    },
    '12': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '13': {
      type: 'ST',
      desc: 'PSRO/UR Approval Indicator',
      opt: 'B',
      rep: 1,
    },
    '14': {
      type: 'ST',
      desc: 'PSRO/UR Approved Stay Fm',
      opt: 'B',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'PSRO/UR Approved Stay To',
      opt: 'B',
      rep: 1,
    },
    '16': {
      type: 'ST',
      desc: 'Occurrence',
      opt: 'B',
      rep: 5,
    },
    '17': {
      type: 'ST',
      desc: 'Occurrence Span',
      opt: 'B',
      rep: 1,
    },
    '18': {
      type: 'ST',
      desc: 'Occur Span Start Date',
      opt: 'B',
      rep: 1,
    },
    '19': {
      type: 'ST',
      desc: 'Occur Span End Date',
      opt: 'B',
      rep: 1,
    },
    '20': {
      type: 'ST',
      desc: 'UB 82 Locator 2',
      opt: 'B',
      rep: 1,
    },
    '21': {
      type: 'ST',
      desc: 'UB 82 Locator 9',
      opt: 'B',
      rep: 1,
    },
    '22': {
      type: 'ST',
      desc: 'UB 82 Locator 27',
      opt: 'B',
      rep: 1,
    },
    '23': {
      type: 'ST',
      desc: 'UB 82 Locator 45',
      opt: 'B',
      rep: 1,
    },
  },
};
