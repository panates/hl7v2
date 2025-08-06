import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PR1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Procedures',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - Procedure',
      opt: 'R',
      len: 4,
    },
    '2': {
      type: 'IS',
      desc: 'Procedure Coding Method',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 89,
    },
    '3': {
      type: 'CE',
      desc: 'Procedure Code',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '4': {
      type: 'ST',
      desc: 'Procedure Description',
      opt: 'O',
      rep: 1,
      len: 40,
    },
    '5': {
      type: 'TS',
      desc: 'Procedure Date/Time',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ID',
      desc: 'Procedure Type',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 230,
    },
    '7': {
      type: 'NM',
      desc: 'Procedure Minutes',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '8': {
      type: 'XCN',
      desc: 'Anesthesiologist',
      opt: 'O',
      rep: 'infinite',
      len: 120,
    },
    '9': {
      type: 'IS',
      desc: 'Anesthesia Code',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 19,
    },
    '10': {
      type: 'NM',
      desc: 'Anesthesia Minutes',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '11': {
      type: 'XCN',
      desc: 'Surgeon',
      opt: 'O',
      rep: 'infinite',
      len: 120,
    },
    '12': {
      type: 'XCN',
      opt: 'O',
      len: 230,
    },
    '13': {
      type: 'CE',
      desc: 'Consent Code',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '14': {
      desc: 'Procedure Priority',
    },
    '15': {
      type: 'CE',
      desc: 'Associated Diagnosis Code',
      opt: 'O',
      rep: 1,
      len: 80,
    },
  },
};
