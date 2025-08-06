import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Numeric Observation',
  fields: {
    '1': {
      type: 'NM',
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Units of Measure',
      len: 250,
    },
    '3': {
      type: 'NM',
      desc: 'Range of Decimal Precision',
      rep: 'infinite',
      len: 10,
    },
    '4': {
      type: 'CE',
      desc: 'Corresponding SI Units of Measure',
      len: 250,
    },
    '5': {
      type: 'TX',
      desc: 'SI Conversion Factor',
    },
    '6': {
      desc: 'Reference',
      opt: 'O',
      len: 250,
    },
    '7': {
      desc: 'Critical Range for Ordinal and Continuous Observations',
      len: 205,
    },
    '8': {
      desc: 'Absolute Range for Ordinal and Continuous Observations',
      len: 250,
    },
    '9': {
      desc: 'Delta Check Criteria',
      rep: 'infinite',
      len: 250,
    },
    '10': {
      type: 'NM',
      desc: 'Minimum Meaningful Increments',
      rep: 1,
      len: 20,
    },
  },
};
