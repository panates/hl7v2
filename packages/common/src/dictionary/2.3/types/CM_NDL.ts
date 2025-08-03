import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_NDL: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'OP Name',
    },
    '4': {
      type: 'IS',
      desc: 'Point Of Care',
    },
    '5': {
      type: 'IS',
      desc: 'Room',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'IS',
      desc: 'Bed',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'HD',
      desc: 'Facility',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      desc: 'Location Status',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'IS',
      desc: 'Person Location Type',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'IS',
      desc: 'Building',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Floor',
      opt: 'O',
      rep: 1,
    },
  },
};
