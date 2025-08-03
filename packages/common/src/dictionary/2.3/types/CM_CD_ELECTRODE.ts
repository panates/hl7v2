import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_CD_ELECTRODE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Electrode Parameter',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Source Name 1',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Source Name 2',
      opt: 'O',
      rep: 1,
    },
  },
};
