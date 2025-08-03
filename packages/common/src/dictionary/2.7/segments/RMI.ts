import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RMI: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Risk Management Incident',
  fields: {
    '1': {
      desc: 'Risk Management Incident Code',
      opt: 'O',
      rep: 1,
      table: 427,
    },
    '2': {
      desc: 'Date/Time Incident',
      opt: 'O',
      rep: 1,
    },
    '3': {
      desc: 'Incident Type Code',
      opt: 'O',
      rep: 1,
      table: 428,
    },
  },
};
