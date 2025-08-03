import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DG1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - diagnosis',
    },
    '5': {
      desc: 'Diagnosis date / time',
      len: 26,
    },
    '6': {
      desc: 'Diagnosis / DRG type',
    },
    '7': {
      type: 'CE',
      len: 60,
    },
    '9': {
      desc: 'DRG approval indicator',
    },
    '10': {
      desc: 'DRG grouper review code',
    },
    '11': {
      len: 60,
    },
    '15': {
      type: 'NM',
      desc: 'Diagnosis / DRG priority',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '16': {
      type: 'CN',
      desc: 'Diagnosing clinician',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
