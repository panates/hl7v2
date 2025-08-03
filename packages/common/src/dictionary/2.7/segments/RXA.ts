import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Administration',
  fields: {
    '3': {
      desc: 'Date/Time Start of Administration',
    },
    '4': {
      desc: 'Date/Time End of Administration',
    },
    '5': {
      table: 292,
    },
    '7': {
      opt: 'C',
    },
    '9': {
      rep: 'infinite',
    },
    '10': {
      type: 'XCN',
    },
    '12': {
      desc: 'Administered Per (Time Unit)',
      opt: 'C',
    },
    '13': {
      type: 'NM',
      desc: 'Administered Strength',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Administered Strength Units',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 'infinite',
    },
    '16': {
      desc: 'Substance Expiration Date',
      opt: 'O',
      rep: 'infinite',
    },
    '17': {
      desc: 'Substance Manufacturer Name',
      opt: 'O',
      rep: 'infinite',
      table: 227,
    },
    '18': {
      desc: 'Substance/Treatment Refusal Reason',
      opt: 'O',
      rep: 'infinite',
    },
    '19': {
      desc: 'Indication',
      opt: 'O',
      rep: 'infinite',
    },
    '20': {
      type: 'ID',
      desc: 'Completion Status',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 322,
    },
    '21': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '22': {
      desc: 'System Entry Date/Time',
      opt: 'O',
      rep: 1,
    },
  },
};
