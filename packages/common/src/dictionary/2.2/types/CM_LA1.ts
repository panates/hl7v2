import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_LA1: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Location With Address Information',
  fields: {
    '1': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Dispense / Deliver To Location',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'AD',
      desc: 'Location',
      opt: 'O',
      rep: 1,
    },
  },
};
