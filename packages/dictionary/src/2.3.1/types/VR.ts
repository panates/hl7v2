import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const VR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Value Qualifier',
  fields: {
    '1': {
      type: 'ST',
      desc: 'First Data Code Value',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Last Data Code Calue',
      opt: 'O',
      rep: 1,
    },
  },
};
