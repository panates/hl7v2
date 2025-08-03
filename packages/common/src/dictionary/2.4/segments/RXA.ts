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
      len: 250,
      table: 292,
    },
    '7': {
      len: 250,
    },
    '8': {
      len: 250,
    },
    '9': {
      type: 'CE',
      rep: 'infinite',
      len: 250,
    },
    '10': {
      type: 'XCN',
      len: 250,
    },
    '11': {
      len: 200,
    },
    '13': {
      type: 'NM',
      desc: 'Administered Strength',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '14': {
      type: 'CE',
      desc: 'Administered Strength Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '15': {
      type: 'ST',
      desc: 'Substance Lot Number',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '16': {
      type: 'TS',
      desc: 'Substance Expiration Date',
      opt: 'O',
      rep: 'infinite',
      len: 26,
    },
    '17': {
      type: 'CE',
      desc: 'Substance Manufacturer Name',
      opt: 'O',
      rep: 'infinite',
      len: 250,
      table: 227,
    },
    '18': {
      type: 'CE',
      desc: 'Substance/Treatment Refusal Reason',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '19': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      rep: 'infinite',
      len: 250,
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
      desc: 'Action Code-RXA',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 323,
    },
    '22': {
      type: 'TS',
      desc: 'System Entry Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};
