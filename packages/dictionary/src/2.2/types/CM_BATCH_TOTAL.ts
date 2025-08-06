import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_BATCH_TOTAL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'CM For Batch Totals',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Batch Total 1',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Batch Total 2',
      opt: 'O',
      rep: 1,
    },
  },
};
