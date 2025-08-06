import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM3: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: 'Preferred Coding System',
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Valid Coded "Answers"',
      len: 60,
    },
    '4': {
      desc: 'Normal Text/Codes for Categorical Observations',
      len: 200,
    },
    '5': {
      desc: 'Abnormal Text/Codes for Categorical Observations',
      rep: 1,
    },
    '6': {
      desc: 'Critical Text Codes for Categorical Observations',
    },
    '7': {
      type: 'ID',
      desc: 'Value Type',
      opt: 'R',
      len: 2,
      table: 125,
    },
  },
};
