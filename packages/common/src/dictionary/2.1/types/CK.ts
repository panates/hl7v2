import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CK: HL7DataTypeDefinition = {
  desc: 'Composite ID With Check Digit',
  fields: {
    '1': {
      type: 'NM',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Check Digit',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Code Identifying Check Digit Scheme Employed',
      opt: 'O',
      rep: 1,
    },
  },
};
