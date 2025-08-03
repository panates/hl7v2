import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CNE: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '1': {
      type: 'ST',
      desc: 'Identifier',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Text',
      opt: 'O',
      rep: 1,
    },
    '3': {
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '4': {
      type: 'ST',
      desc: 'Alternate Identifier',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Alternate Text',
      opt: 'O',
      rep: 1,
    },
    '6': {
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '7': {
      type: 'ST',
      desc: 'Coding System Version ID',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Alternate Coding System Version ID',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Original Text',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Second Alternate Identifier',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Second Alternate Text',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Name of Second Alternate Coding System',
      opt: 'O',
      rep: 1,
      len: 12,
      table: 396,
    },
    '13': {
      type: 'ST',
      desc: 'Second Alternate Coding System Version ID',
      opt: 'C',
      rep: 1,
    },
    '14': {
      type: 'ST',
      desc: 'Coding System OID',
      opt: 'C',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'Value Set OID',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'DTM',
      desc: 'Value Set Version ID',
      opt: 'C',
      rep: 1,
    },
    '17': {
      type: 'ST',
      desc: 'Alternate Coding System OID',
      opt: 'C',
      rep: 1,
    },
    '18': {
      type: 'ST',
      desc: 'Alternate Value Set OID',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'DTM',
      desc: 'Alternate Value Set Version ID',
      opt: 'C',
      rep: 1,
    },
    '20': {
      type: 'ST',
      desc: 'Second Alternate Coding System OID',
      opt: 'C',
      rep: 1,
    },
    '21': {
      type: 'ST',
      desc: 'Second Alternate Value Set OID',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'DTM',
      desc: 'Second Alternate Value Set Version ID',
      opt: 'C',
      rep: 1,
    },
  },
};
