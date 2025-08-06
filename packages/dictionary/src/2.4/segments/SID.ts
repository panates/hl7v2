import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SID: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Substance Identifier',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Application / Method Identifier',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '2': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'ST',
      desc: 'Substance Container Identifier',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '4': {
      type: 'CE',
      desc: 'Substance Manufacturer Identifier',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 385,
    },
  },
};
