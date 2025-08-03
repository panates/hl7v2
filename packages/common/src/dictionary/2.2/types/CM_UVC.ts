import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_UVC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Value Code And Amount',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Value Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Value Amount',
      opt: 'O',
      rep: 1,
    },
  },
};
