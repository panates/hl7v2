import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PRL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Parent Result Link',
  fields: {
    '1': {
      type: 'CE',
      desc: 'OBX-3 Observation Identifier Of Parent Result',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'OBX-4 Sub-ID Of Parent Result',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TX',
      desc: 'Part Of OBX-5 Observation Result From Parent',
      opt: 'O',
      rep: 1,
    },
  },
};
