import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const TS: HL7DataTypeDefinition = {
  desc: 'Time Stamp',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Time Of An Event',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Degree Of Precision',
      opt: 'O',
      rep: 1,
    },
  },
};
