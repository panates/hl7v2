import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SLT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'EI',
      desc: 'Device Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Device Name',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'EI',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Item Identifier',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Bar Code',
      opt: 'O',
      rep: 1,
    },
  },
};
