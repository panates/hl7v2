import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Numeric Observation',
  fields: {
    '1': {
      type: 'NM',
    },
    '2': {
      desc: 'Units of Measure',
    },
    '3': {
      type: 'NM',
      desc: 'Range of Decimal Precision',
      rep: 'infinite',
    },
    '4': {
      desc: 'Corresponding SI Units of Measure',
    },
    '5': {
      type: 'TX',
      desc: 'SI Conversion Factor',
    },
    '6': {
      desc: 'Reference (Normal) Range for Ordinal and Continuous Observations',
      opt: 'O',
    },
    '7': {
      desc: 'Critical Range for Ordinal and Continuous Observations',
    },
    '8': {
      desc: 'Absolute Range for Ordinal and Continuous Observations',
    },
    '9': {
      desc: 'Delta Check Criteria',
      rep: 'infinite',
    },
    '10': {
      type: 'NM',
      desc: 'Minimum Meaningful Increments',
      rep: 1,
    },
  },
};
