import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_RANGE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Wertebereich',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Low Value',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CE',
      desc: 'High Value',
      opt: 'O',
      rep: 1,
    },
  },
};
