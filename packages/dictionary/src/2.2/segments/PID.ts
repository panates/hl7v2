import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PID: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - Patient ID',
    },
    '2': {
      desc: 'Patient ID',
    },
    '3': {
      type: 'CM_PAT_ID',
      desc: 'Patient ID',
      rep: 'infinite',
      len: 20,
    },
    '4': {
      desc: 'Alternate Patient ID',
    },
    '5': {
      desc: 'Patient Name',
    },
    '6': {
      desc: "Mother's Maiden Name",
    },
    '7': {
      type: 'TS',
      desc: 'Date of Birth',
      len: 26,
    },
    '9': {
      desc: 'Patient Alias',
    },
    '10': {
      desc: 'Race',
    },
    '11': {
      desc: 'Patient Address',
      rep: 3,
    },
    '13': {
      desc: 'Phone Number - Home',
    },
    '14': {
      desc: 'Phone Number - Business',
    },
    '15': {
      desc: 'Language - Patient',
    },
    '16': {
      desc: 'Marital Status',
    },
    '18': {
      desc: 'Patient Account Number',
    },
    '19': {
      desc: 'Social security number - patient',
    },
    '20': {
      type: 'CM_LICENSE_NO',
      desc: "Driver's license number - patient",
    },
    '21': {
      type: 'CK',
      desc: "Mother's Identifier",
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '22': {
      type: 'ID',
      desc: 'Ethnic Group',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 189,
    },
    '23': {
      type: 'ST',
      desc: 'Birth Place',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '24': {
      type: 'ID',
      desc: 'Multiple Birth Indicator',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '25': {
      type: 'NM',
      desc: 'Birth Order',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '26': {
      type: 'ID',
      desc: 'Citizenship',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 171,
    },
    '27': {
      type: 'ST',
      desc: 'Veterans Military Status',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};
