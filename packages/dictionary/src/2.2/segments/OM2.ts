import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Numeric observation',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment Type ID',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '2': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'CE',
      desc: 'Units of Measure',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'NM',
      desc: 'Range of Decimal Precision',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '5': {
      type: 'CE',
      desc: 'Corresponding SI Units of Measure',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '6': {
      type: 'TX',
      desc: 'SI Conversion Factor',
      opt: 'R',
      rep: 'infinite',
      len: 20,
    },
    '7': {
      type: 'CM_RFR',
      desc: 'Reference',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '8': {
      type: 'CM_RANGE',
      desc: 'Critical range for ordinal and continuous observations',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '9': {
      type: 'CM_ABS_RANGE',
      desc: 'Absolute range for ordinal and continuous observations',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '10': {
      type: 'CM_DLT',
      desc: 'Delta Check Criteria',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '11': {
      type: 'NM',
      desc: 'Minimum Meaningful Increments',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
