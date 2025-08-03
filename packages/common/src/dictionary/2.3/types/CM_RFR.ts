import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_RFR: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '2': {
      type: 'IS',
    },
    '4': {
      desc: 'Age Gestation',
    },
    '5': {
      type: 'TX',
    },
    '6': {
      type: 'ST',
      desc: 'Race/subspecies',
    },
    '7': {
      type: 'TX',
      desc: 'Conditions',
    },
  },
};
