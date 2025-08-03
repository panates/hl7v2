import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IN1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Insurance segment',
  fields: {
    '1': {
      desc: 'Set ID - IN1',
    },
    '2': {
      opt: 'R',
      len: 60,
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
      desc: 'Insured s Group Emp ID',
      rep: 'infinite',
    },
    '11': {
      desc: 'Insured s Group Emp Name',
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
      type: 'CE',
      desc: 'Insured s Relationship To Patient',
      len: 80,
    },
    '18': {
      desc: 'Insured s Date Of Birth',
    },
    '19': {
      desc: 'Insured s Address',
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
      type: 'TS',
      len: 26,
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
      type: 'CE',
      desc: 'Insured s Employment Status',
      len: 60,
    },
    '43': {
      desc: 'Insured s Sex',
    },
    '44': {
      desc: 'Insured s Employer s Address',
      rep: 'infinite',
    },
    '45': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '46': {
      opt: 'O',
      rep: 1,
      len: 8,
      table: 72,
    },
    '48': {
      table: 295,
    },
    '49': {
      desc: 'Insured s ID Number',
      rep: 'infinite',
    },
  },
};
