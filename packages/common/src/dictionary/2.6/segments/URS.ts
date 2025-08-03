import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const URS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'R/U Where Subject Definition',
    },
    '2': {
      type: 'DTM',
      len: 26,
    },
    '3': {
      type: 'DTM',
      len: 26,
    },
    '4': {
      desc: 'R/U What User Qualifier',
    },
    '5': {
      desc: 'R/U Other Results Subject Definition',
    },
    '6': {
      type: 'ID',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 156,
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 157,
    },
    '8': {
      type: 'ID',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 158,
    },
  },
};
