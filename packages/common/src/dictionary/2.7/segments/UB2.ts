import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const UB2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Uniform Billing Data',
  fields: {
    '1': {
      desc: 'Set ID - UB2',
    },
    '2': {
      desc: 'Co-Insurance Days (9)',
    },
    '3': {
      type: 'CWE',
      desc: 'Condition Code (24-30)',
      rep: 7,
    },
    '4': {
      desc: 'Covered Days (7)',
    },
    '5': {
      desc: 'Non-Covered Days (8)',
    },
    '6': {
      desc: 'Value Amount & Code',
      rep: 12,
    },
    '7': {
      desc: 'Occurrence Code & Date (32-35)',
      rep: 8,
    },
    '8': {
      desc: 'Occurrence Span Code/Dates (36)',
      rep: 2,
    },
    '9': {
      desc: 'Uniform Billing Locator 2 (State)',
      rep: 2,
    },
    '10': {
      desc: 'Uniform Billing 11 (State)',
      rep: 2,
    },
    '11': {
      desc: 'Uniform Billing 31 (National)',
    },
    '12': {
      desc: 'Document Control Number',
      rep: 3,
    },
    '13': {
      desc: 'Uniform Billing 49 (National)',
      rep: 23,
    },
    '14': {
      desc: 'Uniform Billing 56 (State)',
      rep: 5,
    },
    '15': {
      desc: 'Uniform Billing 57 (National)',
    },
    '16': {
      desc: 'Uniform Billing 78 (State)',
      rep: 2,
    },
    '17': {
      type: 'NM',
      desc: 'Special Visit Count',
      opt: 'O',
      rep: 1,
      len: 3,
    },
  },
};
