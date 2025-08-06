import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SLT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Sterilization Lot Segment',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Device Number',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '2': {
      type: 'ST',
      desc: 'Device Name',
      opt: 'O',
      rep: 1,
      len: 999,
    },
    '3': {
      type: 'EI',
      desc: 'Lot Number',
      opt: 'O',
      rep: 1,
      len: 11,
    },
    '4': {
      type: 'EI',
      desc: 'Item Identifier',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '5': {
      type: 'ST',
      desc: 'Bar Code',
      opt: 'O',
      rep: 1,
      len: 30,
    },
  },
};
