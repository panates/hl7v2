import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ADJ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Adjustment',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Provider Adjustment Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Payer Adjustment Number',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'SI',
      desc: 'Adjustment Sequence Number',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '4': {
      desc: 'Adjustment Category',
      opt: 'R',
      rep: 1,
      table: 564,
    },
    '5': {
      type: 'CP',
      desc: 'Adjustment Amount',
      opt: 'O',
    },
    '6': {
      type: 'CQ',
      desc: 'Adjustment Quantity',
      opt: 'O',
      rep: 1,
      table: 560,
    },
    '7': {
      type: 'CWE',
      desc: 'Adjustment Reason PA',
      opt: 'C',
      rep: 1,
      table: 565,
    },
    '8': {
      type: 'ST',
      desc: 'Adjustment Description',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'Original Value',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'NM',
      desc: 'Substitute Value',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Adjustment Action',
      opt: 'O',
      rep: 1,
      table: 569,
    },
    '12': {
      type: 'EI',
      desc: 'Provider Adjustment Number Cross Reference',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'EI',
      desc: 'Provider Product/Service Line Item Number Cross Reference',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'DTM',
      desc: 'Adjustment Date',
      opt: 'R',
      rep: 1,
    },
    '15': {
      type: 'XON',
      opt: 'O',
      rep: 1,
    },
  },
};
