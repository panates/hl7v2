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
    },
    '2': {
      type: 'EI',
      desc: 'Alternate Study ID',
      opt: 'O',
      rep: 1,
    },
    '3': {
      desc: 'Institution Registering the Patient',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CX',
      desc: 'Sponsor Patient ID  ',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'CX',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Date/Time of Patient Study Registration',
      rep: 1,
    },
    '7': {
      type: 'XCN',
      desc: 'Person Performing Study Registration',
      opt: 'O',
    },
    '8': {
      type: 'XCN',
      desc: 'Study Authorizing Provider ',
      opt: 'R',
    },
    '9': {
      desc: 'Date/Time Patient Study Consent Signed',
      opt: 'C',
      rep: 1,
    },
    '10': {
      desc: 'Patient Study Eligibility Status',
      opt: 'C',
      rep: 1,
    },
    '11': {
      desc: 'Study Randomization Date/time',
      opt: 'O',
      rep: 3,
    },
    '12': {
      opt: 'O',
      rep: 3,
    },
    '13': {
      desc: 'Stratum for Study Randomization',
      opt: 'O',
      rep: 3,
    },
    '14': {
      desc: 'Patient Evaluability Status',
      opt: 'C',
      rep: 1,
    },
    '15': {
      desc: 'Date/Time Ended Study',
      opt: 'C',
      rep: 1,
    },
    '16': {
      desc: 'Reason Ended Study',
      opt: 'C',
      rep: 1,
    },
  },
};
