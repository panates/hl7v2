import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const CTD: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Contact Data',
  fields: {
    '1': {
      desc: 'Contact Role',
      opt: 'R',
      rep: 'infinite',
      table: 131,
    },
    '2': {
      type: 'XPN',
      desc: 'Contact Name',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'XAD',
      desc: 'Contact Address',
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      type: 'PL',
      desc: 'Contact Location',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'XTN',
      desc: 'Contact Communication Information',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      desc: 'Preferred Method of Contact ',
      opt: 'O',
      rep: 1,
      table: 185,
    },
    '7': {
      desc: 'Contact Identifiers',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
