import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM3: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Categorical Service/Test/Observation',
  fields: {
    '1': {
      type: 'NM',
    },
    '2': {
      desc: 'Preferred Coding System',
    },
    '3': {
      desc: 'Valid Coded "Answers"',
    },
    '4': {
      desc: 'Normal Text/Codes for Categorical Observations',
    },
    '5': {
      desc: 'Abnormal Text/Codes for Categorical Observations',
    },
    '6': {
      desc: 'Critical Text/Codes for Categorical Observations',
    },
    '7': {
      type: 'ID',
      desc: 'Value Type',
      table: 125,
    },
  },
};
