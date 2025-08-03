import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PAC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Shipment Package',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set Id - PAC',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'EI',
      desc: 'Package ID',
      opt: 'C',
      rep: 1,
    },
    '3': {
      type: 'EI',
      desc: 'Parent Package ID',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NA',
      desc: 'Position in Parent Package',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      desc: 'Package Type',
      opt: 'R',
      rep: 1,
      table: 908,
    },
    '6': {
      type: 'CWE',
      desc: 'Package Condition',
      opt: 'O',
      rep: 'infinite',
      table: 544,
    },
    '7': {
      type: 'CWE',
      desc: 'Package Handling Code',
      opt: 'O',
      rep: 'infinite',
      table: 376,
    },
    '8': {
      type: 'CWE',
      desc: 'Package Risk Code',
      opt: 'O',
      rep: 'infinite',
      table: 489,
    },
  },
};
