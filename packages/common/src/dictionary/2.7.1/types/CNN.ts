import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CNN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite ID Number and Name Simplified',
  fields: {
    '4': {
      desc: 'Second and Further Given Names or Initials Thereof',
    },
    '7': {
      table: 360,
    },
    '8': {
      opt: 'C',
      table: 297,
    },
    '9': {
      desc: 'Assigning Authority   - Namespace ID',
      opt: 'C',
      table: 363,
    },
    '10': {
      desc: 'Assigning Authority  - Universal ID',
      opt: 'C',
    },
    '11': {
      desc: 'Assigning Authority  - Universal ID Type',
      opt: 'C',
      len: 6,
      table: 301,
    },
  },
};
