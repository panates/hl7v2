import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM2: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Units of Measure',
      len: 60,
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
      len: 60,
    },
    '5': {
      type: 'TX',
      desc: 'SI Conversion Factor',
    },
    '6': {
      type: 'CM_RFR',
      desc: 'Reference',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '7': {
      type: 'CM_RANGE',
      desc: 'Critical Range for Ordinal & Continuous Obs',
      rep: 1,
    },
    '8': {
      type: 'CM_ABS_RANGE',
      desc: 'Absolute Range for Ordinal & Continuous Obs',
    },
    '9': {
      type: 'CM_DLT',
      desc: 'Delta Check Criteria',
      rep: 'infinite',
    },
    '10': {
      type: 'NM',
      desc: 'Minimum Meaningful Increments',
      rep: 1,
      len: 20,
    },
  },
};
