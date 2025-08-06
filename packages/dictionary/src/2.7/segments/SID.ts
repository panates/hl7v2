import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SID: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Substance Identifier',
  fields: {
    '1': {
      desc: 'Application/Method Identifier',
      opt: 'C',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'C',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Substance Container Identifier',
      opt: 'C',
      rep: 1,
    },
    '4': {
      desc: 'Substance Manufacturer Identifier ',
      opt: 'C',
      rep: 1,
      table: 385,
    },
  },
};
