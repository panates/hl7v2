import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SDD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilization Device Data',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Lot Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Device Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Device Name',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Device Data State',
      opt: 'O',
      rep: 1,
      table: 667,
    },
    '5': {
      desc: 'Load Status',
      opt: 'O',
      rep: 1,
      table: 669,
    },
    '6': {
      type: 'NM',
      desc: 'Control Code',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Operator Name',
      opt: 'O',
      rep: 1,
    },
  },
};
