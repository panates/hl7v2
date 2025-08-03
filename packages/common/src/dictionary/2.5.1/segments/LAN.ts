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
      len: 60,
    },
    '2': {
      type: 'CE',
      desc: 'Language Code',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 296,
    },
    '3': {
      type: 'CE',
      desc: 'Language Ability Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 403,
    },
    '4': {
      type: 'CE',
      desc: 'Language Proficiency Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 404,
    },
  },
};
