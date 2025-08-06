import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CSU: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Sensitivity and Units',
  fields: {
    '4': {
      len: 12,
    },
    '7': {
      opt: 'C',
      len: 12,
    },
    '8': {
      type: 'ST',
      desc: 'Unit of Measure Coding System Version ID',
      opt: 'C',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Coding System Version ID',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Original Text',
      opt: 'O',
      rep: 1,
      len: 199,
    },
    '11': {
      type: 'ST',
      desc: 'Second Alternate Unit of Measure Identifier',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'Second Alternate Unit of Measure Text',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'ID',
      desc: 'Name of Second Alternate Unit of Measure Coding System',
      opt: 'O',
      rep: 1,
      len: 12,
      table: 396,
    },
    '14': {
      type: 'ST',
      desc: 'Second Alternate Unit of Measure Coding System Version ID',
      opt: 'C',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'Unit of Measure Coding System OID',
      opt: 'C',
      rep: 1,
    },
    '16': {
      type: 'ST',
      desc: 'Unit of Measure Value Set OID',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'DTM',
      desc: 'Unit of Measure Value Set Version ID',
      opt: 'C',
      rep: 1,
    },
    '18': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Coding System OID',
      opt: 'C',
      rep: 1,
    },
    '19': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Value Set OID',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'DTM',
      desc: 'Alternate Unit of Measure Value Set Version ID',
      opt: 'C',
      rep: 1,
    },
    '21': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Coding System OID',
      opt: 'C',
      rep: 1,
    },
    '22': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Value Set OID',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'ST',
      desc: 'Alternate Unit of Measure Value Set Version ID',
      opt: 'C',
      rep: 1,
    },
  },
};
