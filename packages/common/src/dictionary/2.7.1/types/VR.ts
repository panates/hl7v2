import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const VR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Value Range',
  fields: {
    '1': {
      type: 'ST',
      desc: 'First Data Code Value',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Last Data Code Value',
      opt: 'O',
      rep: 1,
    },
  },
};
