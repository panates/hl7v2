import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CN: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      desc: 'ID Number',
    },
    '5': {
      desc: 'Suffix',
    },
    '6': {
      type: 'ST',
      desc: 'Prefix',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ID',
      desc: 'Source Table Id',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'AD',
      desc: 'Adresse',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'TN',
      desc: 'Telefon',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'TN',
      desc: 'Faxnummer',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'TN',
      desc: 'Online-Nummer',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'ST',
      desc: 'E-Mail',
      opt: 'O',
      rep: 1,
    },
  },
};
