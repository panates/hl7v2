import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CK: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Composite ID With Check Digit',
  fields: {
    '1': {
      type: 'NM',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      desc: 'Check Digit',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'HD',
    },
  },
};
