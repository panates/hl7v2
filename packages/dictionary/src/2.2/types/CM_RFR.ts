import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_RFR: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Reference Range',
  fields: {
    '1': {
      type: 'CM_RANGE',
      desc: 'Reference Range',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Sex',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CM_RANGE',
      desc: 'Age Range',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CM_RANGE',
      desc: 'Gestational Age Range',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Species',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ID',
      desc: 'Race / Subspecies',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Text Condition',
      opt: 'O',
      rep: 1,
    },
  },
};
