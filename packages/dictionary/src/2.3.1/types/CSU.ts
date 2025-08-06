import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CSU: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Sensitivity/units',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Channel Sensitivity',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Unit Of Measure Identifier',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Unit Of Measure Description',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'IS',
      desc: 'Unit Of Measure Coding System',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Alternate Unit Of Measure Identifier',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Alternate Unit Of Measure Description',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'IS',
      desc: 'Alternate Unit Of Measure Coding System',
      opt: 'O',
      rep: 1,
    },
  },
};
