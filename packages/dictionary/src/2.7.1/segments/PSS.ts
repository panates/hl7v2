import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PSS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Product/Service Section',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Provider Product/Service Section Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Payer Product/Service Section Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'SI',
      desc: 'Product/Service Section Sequence Number',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '4': {
      type: 'CP',
      desc: 'Billed Amount',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Section Description or Heading',
      opt: 'R',
      rep: 1,
    },
  },
};
