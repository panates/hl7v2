import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const LOC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location Identification',
  fields: {
    '1': {
      type: 'PL',
      desc: 'Primary Key Value',
      opt: 'R',
      rep: 1,
      len: 20,
    },
    '2': {
      type: 'ST',
      desc: 'Location Description',
      opt: 'O',
      rep: 1,
      len: 48,
    },
    '3': {
      type: 'IS',
      desc: 'Location Type',
      opt: 'R',
      rep: 'infinite',
      len: 2,
      table: 260,
    },
    '4': {
      type: 'XON',
      desc: 'Organization Name',
      opt: 'O',
      rep: 1,
      len: 90,
    },
    '5': {
      type: 'XAD',
      desc: 'Location Address',
      opt: 'O',
      rep: 1,
      len: 106,
    },
    '6': {
      type: 'XTN',
      desc: 'Location Phone',
      opt: 'O',
      rep: 'infinite',
      len: 40,
    },
    '7': {
      type: 'CE',
      desc: 'License Number',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '8': {
      type: 'ID',
      desc: 'Location Equipment',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 261,
    },
  },
};
