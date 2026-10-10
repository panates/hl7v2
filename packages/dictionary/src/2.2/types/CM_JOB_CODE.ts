import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const CM_JOB_CODE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Job Code',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Job Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Employee Classification',
      opt: 'O',
      rep: 1,
    },
  },
};
