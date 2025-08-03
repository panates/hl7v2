import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_CSU: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Sensitivity/units',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sensitivity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Units Identifier',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Units Text',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Units Name Of Coding System',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ID',
      desc: 'Units Alternate Identifier',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Units Alternate Text',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Units Name Of Alternate Coding System',
      opt: 'O',
      rep: 1,
    },
  },
};
