import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXA: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'NM',
      desc: 'Give Sub-ID Counter',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Administration Sub-ID Counter',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'DTM',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'DTM',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      desc: 'Administered Code',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Administered Amount',
      opt: 'R',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      desc: 'Administered Units',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'Administered Dosage Form',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
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
      rep: 1,
    },
    '14': {
      type: 'CWE',
    },
    '16': {
      type: 'DTM',
    },
    '17': {
      type: 'CWE',
    },
    '18': {
      type: 'CWE',
    },
    '19': {
      type: 'CWE',
    },
    '21': {
      desc: 'Action Code - RXA',
      table: 206,
    },
    '22': {
      type: 'DTM',
    },
    '23': {
      type: 'NM',
      desc: 'Administered Drug Strength Volume',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'CWE',
      desc: 'Administered Drug Strength Volume Units',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'CWE',
      desc: 'Administered Barcode Identifier',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'ID',
      desc: 'Pharmacy Order Type',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 480,
    },
    '27': {
      type: 'PL',
      desc: 'Administer-at',
      opt: 'O',
      rep: 1,
    },
    '28': {
      type: 'XAD',
      desc: 'Administered-at Address',
      opt: 'O',
      rep: 1,
    },
  },
};
