import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_MSG: HL7DataTypeDefinition = {
  desc: 'Message Type',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Message Type',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Trigger Event',
      opt: 'O',
      rep: 1,
    },
  },
};
