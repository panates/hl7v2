import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Participation Information',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Participation Instance ID',
      opt: 'C',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Action Code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 287,
    },
    '3': {
      type: 'CWE',
      desc: 'Action Reason',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Participation ',
      opt: 'R',
      rep: 1,
      table: 912,
    },
    '5': {
      type: 'XCN',
      desc: 'Participation Person',
      opt: 'C',
      rep: 'infinite',
    },
    '6': {
      type: 'CWE',
      desc: 'Participation Person Provider Type',
      opt: 'C',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      desc: 'Participant Organization Unit Type',
      opt: 'C',
      rep: 1,
      table: 406,
    },
    '8': {
      type: 'XON',
      desc: 'Participation Organization',
      opt: 'C',
      rep: 'infinite',
    },
    '9': {
      type: 'PL',
      desc: 'Participant Location',
      opt: 'C',
      rep: 'infinite',
    },
    '10': {
      type: 'EI',
      desc: 'Participation Device',
      opt: 'C',
      rep: 'infinite',
    },
    '11': {
      type: 'DTM',
      desc: 'Participation Begin Date/Time (arrival time)',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'DTM',
      desc: 'Participation End Date/Time (departure time)',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      desc: 'Participation Qualitative Duration',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'XAD',
      desc: 'Participation Address',
      opt: 'C',
      rep: 'infinite',
    },
    '15': {
      type: 'XTN',
      desc: 'Participant Telecommunication Address',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
