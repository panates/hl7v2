import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const NDL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Name with Date and Location',
  fields: {
    '1': {
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'DTM',
      desc: 'Start Date/time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'DTM',
      desc: 'End Date/time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      table: 302,
    },
    '5': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      table: 303,
    },
    '6': {
      type: 'IS',
      desc: 'Bed',
      opt: 'O',
      rep: 1,
      table: 304,
    },
    '7': {
      type: 'HD',
      desc: 'Facility',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      table: 306,
    },
    '9': {
      type: 'IS',
      desc: 'Patient Location Type',
      opt: 'O',
      rep: 1,
      table: 305,
    },
    '10': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      table: 307,
    },
    '11': {
      type: 'IS',
      desc: 'Floor',
      opt: 'O',
      rep: 1,
      table: 308,
    },
  },
};
