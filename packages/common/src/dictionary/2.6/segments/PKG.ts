import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PKG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Packaging Segment',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set Id - PKG',
      opt: 'R',
      rep: 1,
      len: 2,
    },
    '2': {
      type: 'CWE',
      desc: 'Packaging Units',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 818,
    },
    '3': {
      type: 'CNE',
      desc: 'Default Order Unit Of Measure Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 532,
    },
    '4': {
      type: 'NM',
      desc: 'Package Quantity',
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '5': {
      type: 'CP',
      desc: 'Price',
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '6': {
      type: 'CP',
      desc: 'Future Item Price',
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '7': {
      type: 'DTM',
      desc: 'Future Item Price Effective Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
  },
};
