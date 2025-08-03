import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LAN: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Language Detail',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - LAN',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Language Code',
      opt: 'R',
      rep: 1,
      table: 296,
    },
    '3': {
      desc: 'Language Ability Code',
      opt: 'O',
      rep: 'infinite',
      table: 403,
    },
    '4': {
      desc: 'Language Proficiency Code',
      opt: 'O',
      rep: 1,
      table: 404,
    },
  },
};
