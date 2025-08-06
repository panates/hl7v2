import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_ELD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Error',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment-ID',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Sequence',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Field-Position',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CE',
      desc: 'Code Identifying Error',
      opt: 'O',
      rep: 1,
    },
  },
};
