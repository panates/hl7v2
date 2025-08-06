import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const WVI: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Identifier',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Channel Number',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ST',
      desc: 'Channel Name',
      opt: 'O',
      rep: 1,
      len: 17,
    },
  },
};
