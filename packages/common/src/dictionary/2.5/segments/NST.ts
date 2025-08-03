import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NST: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Application control level statistics',
  fields: {
    '1': {
      desc: 'Statistics Available',
      table: 136,
    },
    '2': {
      desc: 'Source Identifier',
    },
    '3': {
      desc: 'Source Type',
    },
    '4': {
      desc: 'Statistics Start',
    },
    '5': {
      desc: 'Statistics End',
    },
    '6': {
      desc: 'Receive Character Count',
    },
    '7': {
      desc: 'Send Character Count',
    },
    '10': {
      desc: 'Checksum Errors Received',
    },
    '11': {
      desc: 'Length Errors Received',
    },
    '12': {
      desc: 'Other Errors Received',
    },
    '13': {
      desc: 'Connect Timeouts',
    },
    '14': {
      desc: 'Receive Timeouts',
    },
  },
};
