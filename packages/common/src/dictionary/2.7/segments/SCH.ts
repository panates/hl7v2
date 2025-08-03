import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SCH: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Scheduling Activity Information',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Placer Appointment ID',
      opt: 'C',
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
      desc: 'Event Reason',
      opt: 'R',
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
      type: 'ST',
      desc: 'Appointment Duration',
      opt: 'B',
      rep: 1,
    },
    '10': {
      desc: 'Appointment Duration Units',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Appointment Timing Quantity',
      opt: 'B',
      rep: 1,
    },
    '12': {
      type: 'XCN',
      desc: 'Placer Contact Person',
      opt: 'O',
    },
    '13': {
      type: 'XTN',
      desc: 'Placer Contact Phone Number',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'XAD',
      desc: 'Placer Contact Address',
      opt: 'O',
    },
    '15': {
      type: 'PL',
      desc: 'Placer Contact Location',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'XCN',
      desc: 'Filler Contact Person',
      opt: 'R',
    },
    '17': {
      type: 'XTN',
      desc: 'Filler Contact Phone Number',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'XAD',
      desc: 'Filler Contact Address',
      opt: 'O',
    },
    '19': {
      type: 'PL',
      desc: 'Filler Contact Location',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'XCN',
      desc: 'Entered by Person',
      opt: 'R',
    },
    '21': {
      type: 'XTN',
      desc: 'Entered by Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
    '22': {
      type: 'PL',
      desc: 'Entered by Location',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'EI',
      desc: 'Parent Placer Appointment ID',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'EI',
      desc: 'Parent Filler Appointment ID',
      opt: 'C',
      rep: 1,
    },
    '25': {
      desc: 'Filler Status Code',
      opt: 'O',
      rep: 1,
      table: 278,
    },
    '26': {
      type: 'EI',
      desc: 'Placer Order Number',
      opt: 'C',
      rep: 'infinite',
    },
    '27': {
      type: 'EI',
      desc: 'Filler Order Number',
      opt: 'C',
      rep: 'infinite',
    },
  },
};
