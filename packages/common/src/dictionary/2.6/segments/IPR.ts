import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IPR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Invoice Processing Results',
  fields: {
    '1': {
      type: 'EI',
      desc: 'IPR Identifier',
      opt: 'R',
      rep: 1,
      len: 73,
    },
    '2': {
      type: 'EI',
      desc: 'Provider Cross Reference Identifier',
      opt: 'R',
      rep: 1,
      len: 73,
    },
    '3': {
      type: 'EI',
      desc: 'Payer Cross Reference Identifier',
      opt: 'R',
      rep: 1,
      len: 73,
    },
    '4': {
      type: 'CWE',
      desc: 'IPR Status',
      opt: 'R',
      rep: 1,
      len: 177,
      table: 571,
    },
    '5': {
      type: 'DTM',
      desc: 'IPR Date/Time',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '6': {
      type: 'CP',
      desc: 'Adjudicated/Paid Amount',
      opt: 'O',
      rep: 1,
      len: 254,
    },
    '7': {
      type: 'DTM',
      desc: 'Expected Payment Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '8': {
      type: 'ST',
      desc: 'IPR Checksum',
      opt: 'R',
      rep: 1,
      len: 10,
    },
  },
};
