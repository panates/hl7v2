import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const NDL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Observing Practitioner',
  fields: {
    '1': {
      type: 'CN',
      desc: 'OP Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Start Date/time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'End Date/time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'IS',
      desc: 'Point Of Care',
      opt: 'O',
      rep: 1,
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
      type: 'IS',
      desc: 'Floor',
      opt: 'O',
      rep: 1,
    },
  },
};
