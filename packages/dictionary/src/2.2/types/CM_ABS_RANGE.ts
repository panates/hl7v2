import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_ABS_RANGE: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Absolute Range',
  fields: {
    '1': {
      type: 'CM_RANGE',
      desc: 'Range',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Numeric Change',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Percent Per Change',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Days',
      opt: 'O',
      rep: 1,
    },
  },
};
