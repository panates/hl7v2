import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Allergy Information',
  fields: {
    '1': {
      desc: 'Set ID - AL1',
    },
    '3': {
      desc: 'Allergy Code/Mnemonic/ Description',
    },
    '4': {
      type: 'IS',
    },
  },
};
