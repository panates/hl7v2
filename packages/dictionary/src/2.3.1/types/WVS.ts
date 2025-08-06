import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const WVS: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Wavefrom Source',
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
