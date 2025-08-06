import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const UB2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'UB92 Data',
  fields: {
    '1': {
      desc: 'Set ID - UB2',
    },
    '2': {
      desc: 'Co-Insurance Days',
    },
    '3': {
      desc: 'Condition Code',
    },
    '4': {
      desc: 'Covered Days',
    },
    '5': {
      desc: 'Non-Covered Days',
    },
    '6': {
      desc: 'Value Amount & Code',
      table: 153,
    },
    '7': {
      desc: 'Occurrence Code & Date',
      table: 350,
    },
    '8': {
      desc: 'Occurrence Span Code/Dates',
      table: 351,
    },
    '9': {
      desc: 'UB92 Locator 2',
    },
    '10': {
      desc: 'UB92 Locator 11',
    },
    '11': {
      desc: 'UB92 Locator 31',
    },
    '12': {
      desc: 'Document Control Number',
    },
    '13': {
      desc: 'UB92 Locator 49',
    },
    '14': {
      desc: 'UB92 Locator 56',
    },
    '15': {
      desc: 'UB92 Locator 57',
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
