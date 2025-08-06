import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - AL1',
    },
    '2': {
      type: 'CE',
      desc: 'Allergen Type Code',
      len: 250,
    },
    '3': {
      desc: 'Allergen Code/Mnemonic/Description',
      len: 250,
    },
    '4': {
      type: 'CE',
      desc: 'Allergy Severity Code',
      len: 250,
    },
    '5': {
      desc: 'Allergy Reaction Code',
    },
  },
};
