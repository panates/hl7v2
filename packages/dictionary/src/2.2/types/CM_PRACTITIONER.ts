import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_PRACTITIONER: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Practitioner',
  fields: {
    '1': {
      type: 'CN',
      desc: 'Procedure Practitioner  ID',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Procedure Practitioner Type',
      opt: 'O',
      rep: 1,
    },
  },
};
