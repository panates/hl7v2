import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const URS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'R/U Where Subject Definition',
    },
    '2': {
      desc: 'R/U when data start date / time',
      len: 26,
    },
    '3': {
      desc: 'R/U when data end date / time',
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
      desc: 'R/U which date / time qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 156,
    },
    '7': {
      type: 'ID',
      desc: 'R/U which date / time status qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 157,
    },
    '8': {
      type: 'ID',
      desc: 'R/U date / time selection qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 158,
    },
  },
};
