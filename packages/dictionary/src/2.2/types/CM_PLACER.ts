import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_PLACER: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Auftragsnummer Des Auftraggebers / Der Auftraggebenden Stelle',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Unique Placer Id',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Placer Application',
      opt: 'O',
      rep: 1,
    },
  },
};
