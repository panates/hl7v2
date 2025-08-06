import { HL7SegmentDefinition } from '../../types.js';

export const MSA: HL7SegmentDefinition = {
  desc: 'Message acknowledgment',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Acknowledgment code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 8,
    },
    '2': {
      type: 'ST',
      desc: 'Message control id',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'ST',
      desc: 'Text message',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '4': {
      type: 'NM',
      desc: 'Expected sequence number',
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '5': {
      type: 'ID',
      desc: 'Delayed acknowledgment type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 102,
    },
  },
};
