import { HL7SegmentDefinition } from '../../types.js';

export const NSC: HL7SegmentDefinition = {
  desc: 'Status change',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Network change type',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ST',
      desc: 'Current cpu',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '3': {
      type: 'ST',
      desc: 'Current fileserver',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '4': {
      type: 'ST',
      desc: 'Current application',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '5': {
      type: 'ST',
      desc: 'Current facility',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '6': {
      type: 'ST',
      desc: 'New cpu',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '7': {
      type: 'ST',
      desc: 'New fileserver',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '8': {
      type: 'ST',
      desc: 'New application',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '9': {
      type: 'ST',
      desc: 'New facility',
      opt: 'O',
      rep: 1,
      len: 30,
    },
  },
};
