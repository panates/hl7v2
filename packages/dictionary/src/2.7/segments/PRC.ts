import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pricing',
  fields: {
    '1': {
      opt: 'R',
      rep: 1,
      table: 132,
    },
    '2': {
      rep: 'infinite',
      table: 464,
    },
    '3': {
      desc: 'Department',
      opt: 'O',
      rep: 'infinite',
      table: 184,
    },
    '4': {
      type: 'CWE',
      desc: 'Valid Patient Classes',
      opt: 'O',
      rep: 'infinite',
      table: 4,
    },
    '5': {
      type: 'CP',
      desc: 'Price',
      opt: 'C',
      rep: 'infinite',
    },
    '6': {
      type: 'ST',
      desc: 'Formula',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      type: 'NM',
      desc: 'Minimum Quantity',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Maximum Quantity',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'MO',
      desc: 'Minimum Price',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'MO',
      desc: 'Maximum Price',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Effective Start Date',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Effective End Date',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      desc: 'Price Override Flag',
      opt: 'O',
      rep: 1,
      table: 268,
    },
    '14': {
      desc: 'Billing Category',
      opt: 'O',
      rep: 'infinite',
      table: 293,
    },
    '15': {
      type: 'ID',
      desc: 'Chargeable Flag',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '16': {
      type: 'ID',
      desc: 'Active/Inactive Flag',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 183,
    },
    '17': {
      type: 'MO',
      desc: 'Cost',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'CWE',
      desc: 'Charge on Indicator',
      opt: 'O',
      rep: 1,
      table: 269,
    },
  },
};
