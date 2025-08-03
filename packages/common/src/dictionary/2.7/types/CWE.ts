import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CWE: DeepPartial<HL7DataTypeDefinition> = {
  fields: {
    '3': {
      opt: 'C',
      len: 12,
    },
    '6': {
      opt: 'C',
      len: 12,
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
      opt: 'C',
      rep: 1,
      len: 12,
      table: 396,
    },
    '13': {
      type: 'ST',
      desc: 'Second Alternate Coding System Version ID',
      opt: 'O',
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
