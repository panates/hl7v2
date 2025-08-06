import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IN3: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Insurance Additional Information, Certification',
  fields: {
    '2': {
      type: 'CX',
      desc: 'Certification Number',
      len: 250,
    },
    '3': {
      type: 'XCN',
      desc: 'Certified By',
      rep: 'infinite',
      len: 250,
    },
    '4': {
      desc: 'Certification Required',
    },
    '5': {
      table: 148,
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
      len: 250,
    },
    '9': {
      desc: 'Certification Begin Date',
    },
    '10': {
      desc: 'Certification End Date',
    },
    '11': {
      table: 149,
    },
    '12': {
      desc: 'Non-Concur Code/Description',
      len: 250,
      table: 233,
    },
    '13': {
      desc: 'Non-Concur Effective Date/Time',
    },
    '14': {
      type: 'XCN',
      desc: 'Physician Reviewer',
      rep: 'infinite',
      len: 250,
      table: 10,
    },
    '15': {
      desc: 'Certification Contact',
    },
    '16': {
      type: 'XTN',
      desc: 'Certification Contact Phone Number',
      rep: 'infinite',
      len: 250,
    },
    '17': {
      desc: 'Appeal Reason',
      len: 250,
      table: 345,
    },
    '18': {
      desc: 'Certification Agency',
      len: 250,
      table: 346,
    },
    '19': {
      type: 'XTN',
      desc: 'Certification Agency Phone Number',
      rep: 'infinite',
      len: 250,
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
      len: 250,
      table: 10,
    },
  },
};
