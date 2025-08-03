import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IN1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - IN1',
    },
    '2': {
      type: 'CWE',
      opt: 'R',
    },
    '3': {
      rep: 'infinite',
    },
    '4': {
      rep: 'infinite',
    },
    '5': {
      rep: 'infinite',
    },
    '6': {
      desc: 'Insurance Co Contact Person',
      rep: 'infinite',
    },
    '7': {
      rep: 'infinite',
    },
    '9': {
      rep: 'infinite',
    },
    '10': {
      rep: 'infinite',
    },
    '11': {
      rep: 'infinite',
    },
    '14': {
      type: 'AUI',
    },
    '16': {
      desc: 'Name Of Insured',
      rep: 'infinite',
    },
    '17': {
      type: 'CWE',
    },
    '18': {
      type: 'DTM',
    },
    '19': {
      rep: 'infinite',
    },
    '20': {
      desc: 'Assignment Of Benefits',
      table: 135,
    },
    '21': {
      desc: 'Coordination Of Benefits',
      table: 173,
    },
    '22': {
      desc: 'Coord Of Ben. Priority',
    },
    '23': {
      desc: 'Notice Of Admission Flag',
      len: 1,
      table: 136,
    },
    '24': {
      desc: 'Notice Of Admission Date',
    },
    '25': {
      desc: 'Report Of Eligibility Flag',
      len: 1,
    },
    '26': {
      desc: 'Report Of Eligibility Date',
    },
    '29': {
      type: 'DTM',
    },
    '30': {
      type: 'XCN',
      rep: 'infinite',
    },
    '31': {
      desc: 'Type Of Agreement Code',
    },
    '34': {
      desc: 'Delay Before L.R. Day',
    },
    '35': {
      table: 42,
    },
    '42': {
      type: 'CWE',
    },
    '44': {
      rep: 'infinite',
    },
    '45': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '46': {
      opt: 'O',
      rep: 1,
      table: 72,
    },
    '48': {
      table: 295,
    },
    '49': {
      rep: 'infinite',
    },
    '50': {
      desc: 'Signature Code',
      opt: 'O',
      rep: 1,
      table: 535,
    },
    '51': {
      type: 'DT',
      desc: 'Signature Code Date',
      opt: 'O',
      rep: 1,
    },
    '52': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '53': {
      desc: 'VIP Indicator',
      opt: 'O',
      rep: 1,
      table: 99,
    },
  },
};
