import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const ERL: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Error Location',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment ID',
      opt: 'R',
      rep: 1,
      len: 3,
    },
    '2': {
      type: 'NM',
      desc: 'Segment Sequence',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Field Position',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'NM',
      desc: 'Field Repetition',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Component Number',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Sub-Component Number',
      opt: 'O',
      rep: 1,
    },
  },
};
