import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XTN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Telecommunication Number',
  fields: {
    '1': {
      desc: 'Telephone Number',
      opt: 'B',
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
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Communication Address',
      opt: 'C',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Country Code',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      opt: 'C',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Extension',
      opt: 'C',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Any Text',
      opt: 'O',
      rep: 1,
    },
    '12': {
      desc: 'Unformatted Telephone number ',
    },
    '14': {
      desc: 'Expiration Date',
    },
    '15': {
      desc: 'Expiration Reason',
    },
  },
};
