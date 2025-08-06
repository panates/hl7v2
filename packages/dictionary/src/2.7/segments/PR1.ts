import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PR1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Procedures',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      len: 4,
    },
    '2': {
      type: 'ST',
      desc: 'Procedure Coding Method',
      opt: 'B',
      rep: 1,
    },
    '3': {
      desc: 'Procedure Code',
      rep: 1,
      table: 88,
    },
    '4': {
      type: 'ST',
      desc: 'Procedure Description',
      opt: 'B',
      rep: 1,
    },
    '5': {
      desc: 'Procedure Date/Time',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 230,
    },
    '7': {
      type: 'NM',
      desc: 'Procedure Minutes',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Anesthesiologist',
      opt: 'B',
    },
    '9': {
      type: 'CWE',
      desc: 'Anesthesia Code',
      opt: 'O',
      rep: 1,
      table: 19,
    },
    '10': {
      type: 'NM',
      desc: 'Anesthesia Minutes',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Surgeon',
      opt: 'B',
    },
    '12': {
      type: 'ST',
      desc: 'Procedure Practitioner ',
      opt: 'B',
    },
    '13': {
      desc: 'Consent Code',
      opt: 'O',
      rep: 1,
      table: 59,
    },
    '14': {
      type: 'NM',
      desc: 'Procedure Priority',
      table: 418,
    },
    '15': {
      desc: 'Associated Diagnosis Code',
      opt: 'O',
      rep: 1,
      table: 51,
    },
    '16': {
      table: 340,
    },
    '17': {
      type: 'CWE',
      desc: 'Procedure DRG Type',
      opt: 'O',
      rep: 1,
      table: 416,
    },
    '18': {
      desc: 'Tissue Type Code',
      opt: 'O',
      rep: 'infinite',
      table: 417,
    },
    '19': {
      opt: 'C',
    },
    '20': {
      opt: 'C',
    },
    '21': {
      type: 'CWE',
      desc: 'DRG Procedure Determination Status ',
    },
    '22': {
      type: 'CWE',
    },
    '23': {
      type: 'PL',
      desc: 'Treating Organizational Unit',
      opt: 'O',
      rep: 'infinite',
    },
    '24': {
      type: 'ID',
      desc: 'Respiratory Within Surgery',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '25': {
      type: 'EI',
      desc: 'Parent Procedure ID',
      opt: 'O',
      rep: 1,
    },
  },
};
