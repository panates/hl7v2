import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_POSITION: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Position',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Saal',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Tisch',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Stuhl',
      opt: 'O',
      rep: 1,
    },
  },
};
