import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SCP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Labor Calculation Type',
      opt: 'O',
      rep: 1,
      table: 651,
    },
    '3': {
      type: 'CWE',
      desc: 'Date Format',
      opt: 'O',
      rep: 1,
      table: 653,
    },
    '4': {
      type: 'EI',
      desc: 'Device Number',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Device Name',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Device Model Name',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      desc: 'Device Type',
      opt: 'O',
      rep: 1,
      table: 657,
    },
    '8': {
      type: 'CWE',
      desc: 'Lot Control',
      opt: 'O',
      rep: 1,
      table: 659,
    },
  },
};
