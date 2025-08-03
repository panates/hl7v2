import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SDD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilization Device Data',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Lot Number',
      opt: 'O',
      rep: 1,
      len: 11,
    },
    '2': {
      type: 'EI',
      desc: 'Device Number',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '3': {
      type: 'ST',
      desc: 'Device Name',
      opt: 'O',
      rep: 1,
      len: 999,
    },
    '4': {
      type: 'IS',
      desc: 'Device Data State',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 667,
    },
    '5': {
      type: 'IS',
      desc: 'Load Status',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 669,
    },
    '6': {
      type: 'NM',
      desc: 'Control Code',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '7': {
      type: 'ST',
      desc: 'Operator Name',
      opt: 'O',
      rep: 1,
      len: 15,
    },
  },
};
