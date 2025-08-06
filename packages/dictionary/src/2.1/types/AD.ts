import { HL7DataTypeDefinition } from '../../types.js';

export const AD: HL7DataTypeDefinition = {
  desc: 'Address',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Street Address',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Other Designation',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'City',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'State Or Province',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Zip',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Country',
      opt: 'O',
      rep: 1,
    },
  },
};
