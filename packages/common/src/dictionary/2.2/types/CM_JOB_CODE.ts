import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

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
