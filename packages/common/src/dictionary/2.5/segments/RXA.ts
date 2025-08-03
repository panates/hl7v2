import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXA: DeepPartial<HL7SegmentDefinition> = {
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
    },
    '8': {
      type: 'CE',
      desc: 'Administered Dosage Form',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Administration Notes',
      opt: 'O',
    },
    '10': {
      desc: 'Administering Provider',
      opt: 'O',
      rep: 'infinite',
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
    '21': {
      desc: 'Action Code - RXA',
    },
    '23': {
      type: 'NM',
      desc: 'Administered Drug Strength Volume',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '24': {
      type: 'CWE',
      desc: 'Administered Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '25': {
      type: 'CWE',
      desc: 'Administered Barcode Identifier',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '26': {
      type: 'ID',
      desc: 'Pharmacy Order Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 480,
    },
  },
};
