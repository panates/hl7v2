import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CP: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'MO',
      desc: 'Price',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Price Type',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'From Value',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'To Value',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CE',
      desc: 'Range Units',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ID',
      desc: 'Range Type',
      opt: 'O',
      rep: 1,
    },
  },
};
