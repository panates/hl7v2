import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const DLD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Discharge to Location and Date',
  fields: {
    '1': {
      desc: 'Discharge to Location',
    },
  },
};
