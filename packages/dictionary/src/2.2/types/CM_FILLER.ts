import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_FILLER: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Filler',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Unique Filler Id',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Filler Application ID',
      opt: 'O',
      rep: 1,
    },
  },
};
