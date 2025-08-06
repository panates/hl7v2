import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CTD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Contact Data',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Contact Role',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
    '2': {
      type: 'XPN',
      desc: 'Contact Name',
      opt: 'O',
      rep: 'infinite',
      len: 106,
    },
    '3': {
      type: 'XAD',
      desc: 'Contact Address',
      opt: 'O',
      rep: 'infinite',
      len: 60,
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
      len: 20,
    },
    '6': {
      type: 'CE',
      desc: 'Preferred Method of Contact',
      opt: 'O',
      rep: 1,
      len: 200,
      table: 185,
    },
    '7': {
      type: 'CM_PI',
      desc: 'Contact Identifiers',
      opt: 'O',
      rep: 'infinite',
      len: 100,
    },
  },
};
