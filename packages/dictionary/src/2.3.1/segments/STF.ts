import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const STF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Staff identification segment',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Primary Key Value - STF',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'CX',
      desc: 'Staff ID Code',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '3': {
      desc: 'Staff Name',
      opt: 'O',
      rep: 'infinite',
      len: 48,
    },
    '4': {
      type: 'IS',
      desc: 'Staff Type',
      opt: 'O',
      rep: 'infinite',
      len: 2,
      table: 182,
    },
    '5': {
      desc: 'Sex',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 1,
    },
    '6': {
      type: 'TS',
      desc: 'Date/Time Of Birth',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 183,
    },
    '8': {
      type: 'CE',
      desc: 'Department',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '9': {
      type: 'CE',
      desc: 'Hospital Service',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '10': {
      desc: 'Phone',
      opt: 'O',
      rep: 'infinite',
      len: 40,
    },
    '11': {
      type: 'XAD',
      opt: 'O',
      rep: 'infinite',
      len: 106,
    },
    '12': {
      type: 'DIN',
      desc: 'Institution Activation Date',
      opt: 'O',
      rep: 'infinite',
    },
    '13': {
      type: 'DIN',
      desc: 'Institution Inactivation Date',
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      type: 'CE',
      desc: 'Backup Person ID',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '15': {
      type: 'ST',
      desc: 'E-Mail Address',
      opt: 'O',
      rep: 'infinite',
      len: 40,
    },
    '16': {
      desc: 'Preferred Method Of Contact',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'CE',
      rep: 1,
      len: 80,
    },
    '21': {
      desc: 'Additional Insured on  Auto',
    },
    '22': {
      desc: 'Driver s License Number - Staff',
    },
    '23': {
      desc: 'Copy  Auto Ins',
    },
  },
};
