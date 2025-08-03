import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const QIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Query Input Parameter List',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment Field Name',
      rep: 1,
    },
    '2': {
      type: 'ST',
      rep: 1,
    },
  },
};
