import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SCP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilizer Configuration',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Number Of Decontamination/Sterilization Devices',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '2': {
      type: 'CWE',
      desc: 'Labor Calculation Type',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 651,
    },
    '3': {
      type: 'CWE',
      desc: 'Date Format',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 653,
    },
    '4': {
      type: 'EI',
      desc: 'Device Number',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '5': {
      type: 'ST',
      desc: 'Device Name',
      opt: 'O',
      rep: 1,
      len: 999,
    },
    '6': {
      type: 'ST',
      desc: 'Device Model Name',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '7': {
      type: 'CWE',
      desc: 'Device Type',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 657,
    },
    '8': {
      type: 'CWE',
      desc: 'Lot Control',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 659,
    },
  },
};
