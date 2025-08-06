import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const NDL: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'CNN',
      desc: 'Name',
    },
    '4': {
      desc: 'Point of Care ',
    },
    '5': {
      desc: 'Room ',
    },
    '8': {
      desc: 'Location Status ',
    },
    '10': {
      desc: 'Building ',
    },
  },
};
