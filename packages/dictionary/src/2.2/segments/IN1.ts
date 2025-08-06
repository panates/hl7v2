import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IN1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - insurance',
    },
    '2': {
      desc: 'Insurance plan ID',
    },
    '3': {
      desc: 'Insurance company ID',
      len: 9,
    },
    '6': {
      desc: 'Insurance company contact pers',
    },
    '7': {
      desc: 'Insurance company phone number',
      rep: 3,
    },
    '10': {
      desc: "Insured's group employer ID",
    },
    '11': {
      desc: "Insured's group employer name",
    },
    '14': {
      type: 'CM_AUI',
    },
    '15': {
      len: 5,
    },
    '20': {
      table: 135,
    },
    '21': {
      table: 173,
    },
    '22': {
      desc: 'Coordination of benefits - priority',
    },
    '23': {
      table: 136,
    },
    '25': {
      desc: 'Report of eligibility code',
      len: 4,
    },
    '26': {
      desc: 'Report of eligibility date',
    },
    '28': {
      desc: 'Pre-admit certification',
    },
    '29': {
      type: 'TS',
      desc: 'Verification date / time',
      len: 26,
    },
    '30': {
      type: 'CN',
    },
    '34': {
      desc: 'Delay before lifetime reserve days',
    },
    '35': {
      type: 'ID',
      table: 42,
    },
    '42': {
      type: 'CE',
      len: 60,
    },
    '45': {
      type: 'ST',
      desc: 'Verification status',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '46': {
      type: 'ID',
      desc: 'Prior insurance plan ID',
      opt: 'O',
      rep: 1,
      len: 8,
      table: 72,
    },
  },
};
