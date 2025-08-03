import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const LA1: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Location with Address Variation 1',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Point of Care',
      opt: 'O',
      rep: 1,
      table: 302,
    },
    '2': {
      type: 'IS',
      desc: 'Room',
      opt: 'O',
      rep: 1,
      table: 303,
    },
    '3': {
      type: 'IS',
      desc: 'Bed',
      opt: 'O',
      rep: 1,
      table: 304,
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
      table: 306,
    },
    '6': {
      type: 'IS',
      desc: 'Patient Location Type',
      opt: 'O',
      rep: 1,
      table: 305,
    },
    '7': {
      type: 'IS',
      desc: 'Building',
      opt: 'O',
      rep: 1,
      table: 307,
    },
    '8': {
      type: 'IS',
      desc: 'Floor',
      opt: 'O',
      rep: 1,
      table: 308,
    },
    '9': {
      type: 'AD',
      desc: 'Address',
      opt: 'O',
      rep: 1,
    },
  },
};
