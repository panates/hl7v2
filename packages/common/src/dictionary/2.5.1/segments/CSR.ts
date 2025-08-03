import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Study Registration',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Sponsor Study ID',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'EI',
      desc: 'Alternate Study ID',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Institution Registering the Patient',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '4': {
      type: 'CX',
      desc: 'Sponsor Patient ID',
      opt: 'R',
      rep: 1,
      len: 30,
    },
    '5': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '6': {
      type: 'TS',
      rep: 1,
      len: 26,
    },
    '7': {
      type: 'XCN',
      desc: 'Person Performing Study Registration',
      opt: 'O',
      len: 250,
    },
    '8': {
      type: 'XCN',
      desc: 'Study Authorizing Provider',
      opt: 'R',
      len: 250,
    },
    '9': {
      type: 'TS',
      desc: 'Date/time Patient Study Consent Signed',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '10': {
      type: 'CE',
      desc: 'Patient Study Eligibility Status',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '11': {
      type: 'TS',
      desc: 'Study Randomization Date/time',
      opt: 'O',
      len: 26,
    },
    '12': {
      type: 'CE',
      opt: 'O',
      len: 250,
    },
    '13': {
      type: 'CE',
      desc: 'Stratum for Study Randomization',
      opt: 'O',
      len: 250,
    },
    '14': {
      type: 'CE',
      desc: 'Patient Evaluability Status',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '15': {
      type: 'TS',
      desc: 'Date/time Ended Study',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '16': {
      type: 'CE',
      desc: 'Reason Ended Study',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};
