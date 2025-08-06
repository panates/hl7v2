import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SFT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Software Segment',
  fields: {
    '1': {
      type: 'XON',
      desc: 'Software Vendor Organization',
      opt: 'R',
      rep: 1,
      len: 567,
    },
    '2': {
      type: 'ST',
      desc: 'Software Certified Version or Release Number',
      opt: 'R',
      rep: 1,
      len: 15,
    },
    '3': {
      type: 'ST',
      desc: 'Software Product Name',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '4': {
      type: 'ST',
      desc: 'Software Binary ID',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'TX',
      desc: 'Software Product Information',
      opt: 'O',
      rep: 1,
      len: 1024,
    },
    '6': {
      type: 'DTM',
      desc: 'Software Install Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
  },
};
