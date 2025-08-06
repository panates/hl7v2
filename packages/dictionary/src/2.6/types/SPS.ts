import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const SPS: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Specimen Source',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Specimen Source Name or Code',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '2': {
      type: 'CWE',
      desc: 'Additives',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 371,
    },
    '3': {
      type: 'TX',
      desc: 'Specimen Collection Method',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '4': {
      type: 'CWE',
      desc: 'Body Site',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 163,
    },
    '5': {
      type: 'CWE',
      desc: 'Site Modifier',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 495,
    },
    '6': {
      type: 'CWE',
      desc: 'Collection Method Modifier Code',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '7': {
      type: 'CWE',
      desc: 'Specimen Role',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 369,
    },
  },
};
