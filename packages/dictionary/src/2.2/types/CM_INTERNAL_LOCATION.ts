import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_INTERNAL_LOCATION: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Internal Location',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Nurse Unit',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Room',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Bed',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      desc: 'Facility ID',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Bed Status',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ID',
      desc: 'Etage',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ID',
      desc: 'Klinik',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ID',
      desc: 'Zentrum',
      opt: 'O',
      rep: 1,
    },
  },
};
