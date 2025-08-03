import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ARV: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CNE',
      desc: 'Access Restriction Action Code',
      opt: 'R',
      rep: 1,
      table: 206,
    },
    '3': {
      type: 'CWE',
      desc: 'Access Restriction Value',
      opt: 'R',
      rep: 1,
      table: 717,
    },
    '4': {
      type: 'CWE',
      desc: 'Access Restriction Reason',
      opt: 'O',
      rep: 'infinite',
      table: 719,
    },
    '5': {
      type: 'ST',
      desc: 'Special Access Restriction Instructions',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'DR',
      opt: 'O',
      rep: 1,
    },
  },
};
