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
      len: 250,
    },
    '6': {
      type: 'CE',
      desc: 'Error Condition',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Message Waiting Number',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '8': {
      type: 'ID',
      desc: 'Message Waiting Priority',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 520,
    },
  },
};
