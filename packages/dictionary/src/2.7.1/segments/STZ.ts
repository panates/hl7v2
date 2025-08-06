import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const STZ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilization Parameter',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Sterilization Type',
      opt: 'O',
      rep: 1,
      table: 806,
    },
    '2': {
      type: 'CWE',
      desc: 'Sterilization Cycle',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CWE',
      desc: 'Maintenance Cycle',
      opt: 'O',
      rep: 1,
      table: 809,
    },
    '4': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 811,
    },
  },
};
