import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RMI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Risk Management Incident',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Risk Management Incident Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 427,
    },
    '2': {
      type: 'TS',
      desc: 'Date/Time Incident',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'CE',
      desc: 'Incident Type Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 428,
    },
  },
};
