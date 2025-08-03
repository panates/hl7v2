import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_CCD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'When To Charge Code',
    },
  },
};
