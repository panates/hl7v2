import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const PN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Family Name',
    },
    '3': {
      desc: 'Second And Further Given Names Or Initials Thereof',
    },
  },
};
