import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const PL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Person Location',
  fields: {
    '1': {
      type: 'HD',
      opt: 'C',
      rep: 1,
    },
    '2': {
      type: 'HD',
      desc: 'Room',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'HD',
      desc: 'Bed',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'HD',
      desc: 'Facility',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'IS',
      desc: 'Location Status',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'IS',
      desc: 'Person Location Type',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'HD',
      desc: 'Building',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'HD',
      desc: 'Floor',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '11': {
      table: 363,
    },
  },
};
