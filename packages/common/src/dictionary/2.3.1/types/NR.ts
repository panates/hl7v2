import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const NR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Wertebereich',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Low Value',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'High Value',
      opt: 'O',
      rep: 1,
    },
  },
};
