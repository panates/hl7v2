import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OBX: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation result',
  fields: {
    '1': {
      desc: 'Set ID - Observational Simple',
    },
    '2': {
      desc: 'Value Type',
      opt: 'R',
    },
    '3': {
      desc: 'Observation Identifier',
    },
    '4': {
      type: 'ST',
      desc: 'Observation Sub-ID',
    },
    '5': {
      desc: 'Observation Value',
      opt: 'O',
      len: 65536,
    },
    '6': {
      type: 'CE',
      len: 60,
    },
    '7': {
      desc: 'References Range',
    },
    '8': {
      type: 'ID',
      desc: 'Abnormal Flags',
      table: 78,
    },
    '10': {
      desc: 'Nature of Abnormal Test',
    },
    '11': {
      desc: 'Observation result status',
      opt: 'R',
    },
    '12': {
      desc: 'Effective date last observation normal values',
      len: 26,
    },
    '13': {
      type: 'ST',
      desc: 'User Defined Access Checks',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '14': {
      type: 'TS',
      desc: 'Date / time of the observation',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '15': {
      type: 'CE',
      desc: "Producer's ID",
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '16': {
      type: 'CN',
      desc: 'Responsible Observer',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
