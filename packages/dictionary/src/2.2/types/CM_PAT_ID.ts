import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PAT_ID: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Patient ID',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
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
    '5': {
      type: 'ID',
      desc: 'Type',
      opt: 'O',
      rep: 1,
    },
  },
};
