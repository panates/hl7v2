import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/treatment administration segment',
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
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'TS',
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
      desc: 'Administration Notes',
      opt: 'O',
      len: 200,
    },
    '10': {
      desc: 'Administering Provider',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '11': {
      type: 'LA2',
      desc: 'Administered-at Location',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'Administered Per',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '18': {
      len: 200,
    },
  },
};
