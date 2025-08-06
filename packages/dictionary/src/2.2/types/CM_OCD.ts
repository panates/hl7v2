import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_OCD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Occurence',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Occurrence Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'DT',
      desc: 'Occurrence Date',
      opt: 'O',
      rep: 1,
    },
  },
};
