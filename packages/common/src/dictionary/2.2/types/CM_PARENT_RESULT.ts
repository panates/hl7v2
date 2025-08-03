import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_PARENT_RESULT: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Undefined CM Data Type',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Observation Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Sub-ID',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CE',
      desc: 'Result',
      opt: 'O',
      rep: 1,
    },
  },
};
