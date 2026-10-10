import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_MDV: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Minimum/maximum Data Values',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Minimum Value',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Maximum Value',
      opt: 'O',
      rep: 1,
    },
  },
};
