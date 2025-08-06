import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const FN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Family + Last Name Prefix',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Family Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Last Name Prefix',
      opt: 'O',
      rep: 1,
    },
  },
};
