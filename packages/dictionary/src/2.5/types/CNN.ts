import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CNN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite ID Number and Name Simplified',
  fields: {
    '1': {
      len: 15,
    },
    '2': {
      len: 50,
    },
    '3': {
      len: 30,
    },
    '4': {
      desc: 'Second and Further Given Names or Initials Thereof',
      len: 30,
    },
    '5': {
      len: 20,
    },
    '6': {
      len: 20,
    },
    '7': {
      len: 5,
      table: 360,
    },
    '8': {
      opt: 'C',
      len: 4,
      table: 297,
    },
    '9': {
      desc: 'Assigning Authority   - Namespace ID',
      opt: 'C',
      len: 20,
      table: 363,
    },
    '10': {
      desc: 'Assigning Authority  - Universal ID',
      opt: 'C',
      len: 199,
    },
    '11': {
      desc: 'Assigning Authority  - Universal ID Type',
      opt: 'C',
      len: 6,
      table: 301,
    },
  },
};
