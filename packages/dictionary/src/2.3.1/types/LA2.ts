import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const LA2: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Location With Address Information (variant 2',
  fields: {
    '1': {
      type: 'IS',
      desc: 'Point Of Care',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Room',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'IS',
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
      type: 'IS',
      desc: 'Building',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      desc: 'Floor',
      opt: 'O',
      rep: 1,
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
      desc: 'State Or Province',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'ST',
      desc: 'Zip Or Postal Code',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ID',
      desc: 'Country',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'ID',
      desc: 'Address Type',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'ST',
      desc: 'Other Geographic Designation',
      opt: 'O',
      rep: 1,
    },
  },
};
