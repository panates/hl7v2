import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const RFR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Reference Range',
  fields: {
    '1': {
      type: 'NR',
      desc: 'Numeric Range',
      opt: 'R',
      rep: 1,
      len: 33,
    },
    '2': {
      type: 'IS',
      desc: 'Administrative Sex',
      opt: 'O',
      rep: 1,
      len: 8,
      table: 1,
    },
    '3': {
      type: 'NR',
      desc: 'Age Range',
      opt: 'O',
      rep: 1,
      len: 33,
    },
    '4': {
      type: 'NR',
      desc: 'Gestational Age Range',
      opt: 'O',
      rep: 1,
      len: 33,
    },
    '5': {
      type: 'ST',
      desc: 'Species',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '6': {
      type: 'ST',
      desc: 'Race/subspecies',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '7': {
      type: 'TX',
      desc: 'Conditions',
      opt: 'O',
      rep: 1,
      len: 199,
    },
  },
};
