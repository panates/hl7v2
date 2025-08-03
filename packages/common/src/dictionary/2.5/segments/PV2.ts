import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PV2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Visit - Additional Information',
  fields: {
    '1': {
      desc: 'Prior Pending Location',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '2': {
      type: 'CE',
      desc: 'Accommodation Code',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CE',
      desc: 'Admit Reason',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CE',
      desc: 'Transfer Reason',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Patient Valuables',
      opt: 'O',
      rep: 'infinite',
      len: 25,
    },
    '6': {
      type: 'ST',
      desc: 'Patient Valuables Location',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '7': {
      desc: 'Visit User Code',
      opt: 'O',
      len: 2,
      table: 130,
    },
    '8': {
      desc: 'Expected Admit Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '9': {
      desc: 'Expected Discharge Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '13': {
      rep: 'infinite',
    },
    '30': {
      type: 'CE',
    },
    '34': {
      len: 1,
    },
    '35': {
      desc: 'Military Non-Availability Code',
      len: 1,
    },
    '48': {
      type: 'TS',
      desc: 'Expected Pre-admission Testing Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '49': {
      type: 'IS',
      desc: 'Notify Clergy Code',
      opt: 'O',
      rep: 'infinite',
      len: 20,
      table: 534,
    },
  },
};
