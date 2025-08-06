import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ARQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment Request',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Placer Appointment ID',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Filler Appointment ID',
      opt: 'C',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Occurrence Number',
      opt: 'C',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Placer Group Number',
      opt: 'O',
      rep: 1,
    },
    '5': {
      desc: 'Schedule ID',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Request Event Reason',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Appointment Reason',
      opt: 'O',
      rep: 1,
      table: 276,
    },
    '8': {
      desc: 'Appointment Type',
      opt: 'O',
      rep: 1,
      table: 277,
    },
    '9': {
      type: 'NM',
      desc: 'Appointment Duration',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Appointment Duration Units',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'DR',
      desc: 'Requested Start Date/Time Range',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'RI',
      desc: 'Repeating Interval',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'ST',
      desc: 'Repeating Interval Duration',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'XCN',
      desc: 'Placer Contact Person',
      opt: 'R',
    },
    '16': {
      type: 'XTN',
      desc: 'Placer Contact Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
    '17': {
      type: 'XAD',
      desc: 'Placer Contact Address',
      opt: 'O',
    },
    '18': {
      type: 'PL',
      desc: 'Placer Contact Location',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'XCN',
      desc: 'Entered By Person',
      opt: 'R',
    },
    '20': {
      type: 'XTN',
      desc: 'Entered By Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
    '21': {
      type: 'PL',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'EI',
      desc: 'Parent Placer Appointment ID',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'EI',
      desc: 'Parent Filler Appointment ID',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'EI',
      desc: 'Placer Order Number',
      opt: 'C',
      rep: 'infinite',
    },
    '25': {
      type: 'EI',
      desc: 'Filler Order Number',
      opt: 'C',
      rep: 'infinite',
    },
  },
};
