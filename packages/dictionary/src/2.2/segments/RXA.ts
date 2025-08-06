import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy aadministration',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Give Sub-ID Counter',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'NM',
      desc: 'Administration Sub-ID Counter',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'TS',
      desc: 'Date / time start of administration',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'TS',
      desc: 'Date / time end of administration',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'CE',
      desc: 'Administered Code',
      opt: 'R',
      rep: 1,
      len: 100,
    },
    '6': {
      type: 'NM',
      desc: 'Administered Amount',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '7': {
      type: 'CE',
      desc: 'Administered Units',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '8': {
      type: 'CE',
      desc: 'Administered Dosage Form',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '9': {
      type: 'ST',
      desc: 'Administration Notes',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '10': {
      type: 'CN',
      desc: 'Administering Provider',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '11': {
      type: 'CM_LA1',
      desc: 'Administered-at Location',
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '12': {
      type: 'ST',
      desc: 'Administered Per',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};
