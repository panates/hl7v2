import type { DeepPartial } from 'ts-gems';
import type { HL7DataTypeDefinition } from '../../types.js';

export const RCD: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      desc: 'Segment Field Name',
      len: 12,
    },
    '2': {
      type: 'ID',
      desc: 'HL7 Data Type',
      len: 3,
      table: 440,
    },
  },
};
