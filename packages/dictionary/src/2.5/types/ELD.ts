import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const ELD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Error Location and Description',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment ID',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '2': {
      type: 'NM',
      desc: 'Segment Sequence',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '3': {
      type: 'NM',
      desc: 'Field Position',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '4': {
      type: 'CE',
      desc: 'Code Identifying Error',
      opt: 'O',
      rep: 1,
      len: 483,
      table: 357,
    },
  },
};
