import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CTD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Contact Data',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Contact Role',
      opt: 'R',
      rep: 'infinite',
      len: 250,
      table: 131,
    },
    '2': {
      type: 'XPN',
      desc: 'Contact Name',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '3': {
      type: 'XAD',
      desc: 'Contact Address',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '4': {
      type: 'PL',
      desc: 'Contact Location',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'XTN',
      desc: 'Contact Communication Information',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '6': {
      type: 'CE',
      desc: 'Preferred Method of Contact',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 185,
    },
    '7': {
      desc: 'Contact Identifiers',
      opt: 'O',
      rep: 'infinite',
      len: 100,
    },
  },
};
