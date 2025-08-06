import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_GROUP_ID: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Group ID',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Unique Group Id',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Placer Application Id',
      opt: 'O',
      rep: 1,
    },
  },
};
