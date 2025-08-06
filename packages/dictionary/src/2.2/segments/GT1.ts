import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const GT1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - guarantor',
    },
    '2': {
      type: 'CK',
    },
    '6': {
      desc: 'Guarantor phone number - home',
      rep: 3,
    },
    '7': {
      desc: 'Guarantor phone number - business',
      rep: 3,
    },
    '12': {
      desc: 'Guarantor social security number',
    },
    '18': {
      desc: 'Guarantor employ phone number',
      rep: 3,
    },
    '19': {
      desc: 'Guarantor employee ID number',
    },
    '21': {
      type: 'ST',
      desc: 'Guarantor organization',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
