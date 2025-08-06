import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XTN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Telecommunication Number',
  fields: {
    '1': {
      desc: 'Telephone Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Telecommunication Use Code',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Telecommunication Equipment Type',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Email Address',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Country Code',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Extension',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Any Text',
      opt: 'O',
      rep: 1,
    },
  },
};
