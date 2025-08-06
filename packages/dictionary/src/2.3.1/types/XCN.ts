import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XCN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Composite ID Number And Name For Persons',
  fields: {
    '2': {
      type: 'FN',
      desc: 'Family+last Name',
    },
    '7': {
      type: 'IS',
    },
    '8': {
      type: 'IS',
    },
    '10': {
      desc: 'Name Type Code',
    },
    '14': {
      desc: 'Assigning Facility',
    },
    '15': {
      type: 'ID',
      desc: 'Name Representation Code',
      opt: 'O',
      rep: 1,
    },
  },
};
