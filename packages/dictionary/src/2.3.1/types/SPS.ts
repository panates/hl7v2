import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SPS: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Specimen Source',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Specimen Source Name Or Code',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'TX',
      desc: 'Additives',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'TX',
      desc: 'Freetext',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CE',
      desc: 'Body Site',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CE',
      desc: 'Site Modifier',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CE',
      desc: 'Collection Modifier Method Code',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CE',
      desc: 'Specimen Role',
      opt: 'O',
      rep: 1,
    },
  },
};
