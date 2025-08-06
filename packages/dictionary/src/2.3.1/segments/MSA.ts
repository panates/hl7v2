import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Message acknowledgment segment',
  fields: {
    '1': {
      desc: 'Acknowledgement Code',
    },
    '2': {
      desc: 'Message Control ID',
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
      type: 'CE',
      desc: 'Error Condition',
      opt: 'O',
      rep: 1,
      len: 100,
    },
  },
};
