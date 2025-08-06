import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const QIP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Query Input Parameter List',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment Field Name',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Value1&value2&value3',
      opt: 'O',
      rep: 1,
    },
  },
};
