import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const LA2: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Location with Address Variation 2',
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
      type: 'ST',
      desc: 'Street Address',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Other Designation',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'City',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'State or Province',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'ST',
      desc: 'Zip or Postal Code',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ID',
      desc: 'Country',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 399,
    },
    '15': {
      type: 'ID',
      desc: 'Address Type',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 190,
    },
    '16': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
  },
};
