import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - AL1',
    },
    '2': {
      desc: 'Allergen Type Code',
    },
    '3': {
      desc: 'Allergen Code/Mnemonic/Description',
    },
    '4': {
      desc: 'Allergy Severity Code',
    },
    '5': {
      desc: 'Allergy Reaction Code',
    },
    '6': {
      type: 'ST',
      opt: 'B',
    },
  },
};
