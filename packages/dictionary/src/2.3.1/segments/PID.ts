import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PID: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient identification segment',
  fields: {
    '1': {
      desc: 'Set ID - PID',
    },
    '2': {
      desc: 'Patient ID',
      len: 20,
    },
    '3': {
      desc: 'Patient Identifier List',
      rep: 'infinite',
      len: 20,
    },
    '4': {
      desc: 'Alternate Patient ID - PID',
      rep: 'infinite',
      len: 20,
    },
    '5': {
      desc: 'Patient Name',
      rep: 'infinite',
    },
    '6': {
      desc: 'Mother s Maiden Name',
      rep: 'infinite',
    },
    '7': {
      type: 'TS',
      desc: 'Date/Time Of Birth',
      len: 26,
    },
    '9': {
      desc: 'Patient Alias',
    },
    '10': {
      type: 'CE',
      desc: 'Race',
      rep: 'infinite',
      len: 80,
    },
    '11': {
      desc: 'Patient Address',
    },
    '12': {
      table: 289,
    },
    '13': {
      desc: 'Phone Number - Home',
    },
    '14': {
      desc: 'Phone Number - Business',
    },
    '16': {
      type: 'CE',
      desc: 'Marital Status',
      rep: 1,
      len: 80,
    },
    '17': {
      type: 'CE',
      len: 80,
    },
    '18': {
      desc: 'Patient Account Number',
    },
    '20': {
      desc: "Driver's License Number - Patient",
    },
    '21': {
      desc: "Mother's Identifier",
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '22': {
      type: 'CE',
      desc: 'Ethnic Group',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
    '23': {
      type: 'ST',
      desc: 'Birth Place',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'ID',
      desc: 'Multiple Birth Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '25': {
      type: 'NM',
      desc: 'Birth Order',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '26': {
      type: 'CE',
      desc: 'Citizenship',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
    '27': {
      desc: 'Veterans Military Status',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '28': {
      desc: 'Nationality',
    },
  },
};
