import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM3: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Categorical Service/Test/Observation',
  fields: {
    '1': {
      type: 'NM',
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Preferred Coding System',
      len: 250,
    },
    '3': {
      type: 'CE',
      len: 250,
    },
    '4': {
      desc: 'Normal Text/Codes for Categorical Observations',
      len: 250,
    },
    '5': {
      desc: 'Abnormal Text/Codes for Categorical Observations',
      len: 250,
    },
    '6': {
      desc: 'Critical Text/Codes for Categorical Observations',
      len: 250,
    },
    '7': {
      type: 'ID',
      desc: 'Value Type',
      len: 2,
      table: 125,
    },
  },
};
