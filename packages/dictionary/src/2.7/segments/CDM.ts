import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CDM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Charge Description Master',
  fields: {
    '1': {
      opt: 'R',
      rep: 1,
      table: 132,
    },
    '2': {
      desc: 'Charge Code Alias',
      opt: 'O',
      rep: 'infinite',
      table: 132,
    },
    '3': {
      type: 'ST',
      desc: 'Charge Description Short',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Charge Description Long',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      desc: 'Description Override Indicator',
      opt: 'O',
      rep: 1,
      table: 268,
    },
    '6': {
      desc: 'Exploding Charges',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      type: 'CNE',
      desc: 'Procedure Code',
      opt: 'O',
      table: 88,
    },
    '8': {
      type: 'ID',
      desc: 'Active/Inactive Flag',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 183,
    },
    '9': {
      desc: 'Inventory Number',
      opt: 'O',
      rep: 'infinite',
      table: 463,
    },
    '10': {
      type: 'NM',
      desc: 'Resource Load',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Contract Number',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'XON',
      desc: 'Contract Organization',
      opt: 'O',
    },
    '13': {
      type: 'ID',
      desc: 'Room Fee Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
