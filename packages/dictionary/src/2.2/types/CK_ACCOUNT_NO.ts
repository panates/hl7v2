import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CK_ACCOUNT_NO: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Account Number',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Account Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Check Digit',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ID',
      desc: 'Check Digit Scheme',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      desc: 'Facility ID',
      opt: 'O',
      rep: 1,
    },
  },
};
