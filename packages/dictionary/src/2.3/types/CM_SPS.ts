import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_SPS: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '6': {
      type: 'CE',
      desc: 'Collection Modifier Method Code',
      opt: 'O',
      rep: 1,
    },
  },
};
