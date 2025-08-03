import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Practitioner Institutional Privileges',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Privilege',
      opt: 'R',
      rep: 1,
      len: 483,
      table: 525,
    },
    '2': {
      type: 'CE',
      desc: 'Privilege Class',
      opt: 'O',
      rep: 1,
      len: 483,
      table: 526,
    },
    '3': {
      type: 'DT',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '4': {
      type: 'DT',
      desc: 'Activation Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '5': {
      type: 'EI',
      desc: 'Facility',
      opt: 'O',
      rep: 1,
      len: 427,
    },
  },
};
