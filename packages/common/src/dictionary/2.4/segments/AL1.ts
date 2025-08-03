import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient allergy information',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Set ID - AL1',
      len: 250,
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
