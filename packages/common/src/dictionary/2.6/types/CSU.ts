import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CSU: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Sensitivity',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Channel Sensitivity',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'ST',
      desc: 'Unit of Measure Identifier',
      opt: 'C',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'ST',
      desc: 'Unit of Measure Description',
      opt: 'C',
      rep: 1,
      len: 199,
    },
    '4': {
      type: 'ID',
      desc: 'Unit of Measure Coding System',
      opt: 'C',
      rep: 1,
      len: 20,
      table: 396,
    },
    '5': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Identifier',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '6': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Description',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '7': {
      type: 'ID',
      desc: 'Alternate Unit of Measure Coding System',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 396,
    },
  },
};
