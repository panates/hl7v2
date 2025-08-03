import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const STZ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilization Parameter',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Sterilization Type',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 806,
    },
    '2': {
      type: 'CWE',
      desc: 'Sterilization Cycle',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '3': {
      type: 'CWE',
      desc: 'Maintenance Cycle',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 809,
    },
    '4': {
      type: 'CWE',
      desc: 'Maintenance Type',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 811,
    },
  },
};
