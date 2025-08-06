import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_NDL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Observing Practitioner',
  fields: {
    '1': {
      type: 'CN',
      desc: 'Interpreter / Technician',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TS',
      desc: 'Start Date/time',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TS',
      desc: 'End Date/time',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Location',
      opt: 'O',
      rep: 1,
    },
  },
};
