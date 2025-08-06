import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Acknowledgment Code',
    },
    '2': {
      desc: 'Message Control ID',
      len: 199,
    },
    '3': {
      desc: 'Text Message',
    },
    '4': {
      desc: 'Expected Sequence Number',
    },
    '5': {
      desc: 'Delayed Acknowledgment Type',
    },
    '6': {
      desc: 'Error Condition',
      rep: 1,
    },
    '7': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 520,
    },
  },
};
