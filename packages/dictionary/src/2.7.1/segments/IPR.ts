import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IPR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Invoice Processing Results',
  fields: {
    '1': {
      type: 'EI',
      desc: 'IPR Identifier',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Provider Cross Reference Identifier',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'EI',
      desc: 'Payer Cross Reference Identifier',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'IPR Status',
      opt: 'R',
      rep: 1,
      table: 571,
    },
    '5': {
      type: 'DTM',
      desc: 'IPR Date/Time',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'CP',
      desc: 'Adjudicated/Paid Amount',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DTM',
      desc: 'Expected Payment Date/Time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'IPR Checksum',
      opt: 'R',
      rep: 1,
    },
  },
};
