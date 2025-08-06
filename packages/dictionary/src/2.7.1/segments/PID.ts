import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PID: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Identification',
  fields: {
    '1': {
      desc: 'Set ID - PID',
    },
    '2': {
      desc: 'Patient ID',
    },
    '3': {
      desc: 'Patient Identifier List',
      rep: 'infinite',
    },
    '4': {
      desc: 'Alternate Patient ID - PID',
    },
    '5': {
      desc: 'Patient Name',
      rep: 'infinite',
      table: 200,
    },
    '6': {
      rep: 'infinite',
    },
    '7': {
      type: 'DTM',
      desc: 'Date/Time of Birth',
    },
    '9': {
      desc: 'Patient Alias',
    },
    '10': {
      type: 'CWE',
      desc: 'Race',
      rep: 'infinite',
    },
    '11': {
      desc: 'Patient Address',
    },
    '13': {
      desc: 'Phone Number - Home',
    },
    '14': {
      desc: 'Phone Number - Business',
    },
    '15': {
      type: 'CWE',
    },
    '16': {
      type: 'CWE',
      desc: 'Marital Status',
      rep: 1,
    },
    '17': {
      type: 'CWE',
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
    },
    '22': {
      type: 'CWE',
      desc: 'Ethnic Group',
      opt: 'O',
      rep: 'infinite',
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
    },
    '26': {
      type: 'CWE',
      desc: 'Citizenship',
      opt: 'O',
      rep: 'infinite',
    },
    '27': {
      type: 'CWE',
      desc: 'Veterans Military Status',
      opt: 'O',
      rep: 1,
    },
    '29': {
      type: 'DTM',
    },
    '33': {
      type: 'DTM',
    },
    '35': {
      type: 'CWE',
    },
    '36': {
      type: 'CWE',
    },
    '38': {
      type: 'CWE',
      rep: 2,
    },
    '39': {
      type: 'CWE',
      desc: 'Tribal Citizenship',
      opt: 'O',
      rep: 'infinite',
      table: 171,
    },
  },
};
