import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CQ: HL7DataTypeDefinition = {
  desc: 'Composite Quantity With Units',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Quantity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Units',
      opt: 'O',
      rep: 1,
    },
  },
};
