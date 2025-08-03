import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IN3: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Insurance additional info - certification',
  fields: {
    '1': {
      desc: 'Set ID - Insurance Certification',
    },
    '2': {
      type: 'CX',
      desc: 'Certification Number',
      len: 59,
    },
    '3': {
      type: 'XCN',
      desc: 'Certified By',
      rep: 'infinite',
    },
    '4': {
      desc: 'Certification Required',
    },
    '6': {
      desc: 'Certification Date/Time',
    },
    '7': {
      desc: 'Certification Modify Date/Time',
    },
    '8': {
      type: 'XCN',
      rep: 'infinite',
    },
    '9': {
      desc: 'Certification Begin Date',
    },
    '10': {
      desc: 'Certification End Date',
    },
    '12': {
      desc: 'Non-Concur Code/Description',
    },
    '13': {
      desc: 'Non-Concur Effective Date/Time',
    },
    '14': {
      type: 'XCN',
      desc: 'Physician Reviewer',
      rep: 'infinite',
    },
    '15': {
      desc: 'Certification Contact',
    },
    '16': {
      type: 'XTN',
      desc: 'Certification Contact Phone Number',
      rep: 'infinite',
    },
    '17': {
      desc: 'Appeal Reason',
    },
    '18': {
      desc: 'Certification Agency',
    },
    '19': {
      type: 'XTN',
      desc: 'Certification Agency Phone Number',
      rep: 'infinite',
    },
    '20': {
      desc: 'Pre-Certification required/Window',
    },
    '21': {
      desc: 'Case Manager',
    },
    '22': {
      desc: 'Second Opinion Date',
    },
    '23': {
      type: 'IS',
      desc: 'Second Opinion Status',
    },
    '24': {
      type: 'IS',
      desc: 'Second Opinion Documentation Received',
      rep: 'infinite',
    },
    '25': {
      type: 'XCN',
      desc: 'Second Opinion Physician',
      rep: 'infinite',
    },
  },
};
