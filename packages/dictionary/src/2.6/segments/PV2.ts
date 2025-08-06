import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
      type: 'CWE',
      desc: 'Accommodation Code',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '3': {
      type: 'CWE',
      desc: 'Admit Reason',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '4': {
      type: 'CWE',
      desc: 'Transfer Reason',
      opt: 'O',
      rep: 1,
      len: 705,
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
      type: 'DTM',
      desc: 'Expected Admit Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '9': {
      type: 'DTM',
      desc: 'Expected Discharge Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '13': {
      rep: 'infinite',
    },
    '30': {
      type: 'CWE',
      len: 705,
    },
    '33': {
      type: 'DTM',
      len: 24,
    },
    '34': {
      len: 1,
    },
    '35': {
      desc: 'Military Non-Availability Code',
      len: 1,
    },
    '38': {
      type: 'CWE',
      len: 705,
    },
    '39': {
      type: 'CWE',
      len: 705,
    },
    '40': {
      type: 'CWE',
      len: 705,
    },
    '41': {
      type: 'CWE',
      len: 705,
    },
    '42': {
      type: 'CWE',
      len: 705,
    },
    '45': {
      type: 'CWE',
      len: 705,
    },
    '47': {
      type: 'DTM',
      len: 24,
    },
    '48': {
      type: 'DTM',
      desc: 'Expected Pre-admission Testing Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '49': {
      type: 'IS',
      desc: 'Notify Clergy Code',
      opt: 'O',
      rep: 'infinite',
      len: 20,
      table: 534,
    },
    '50': {
      type: 'DT',
      desc: 'Advance Directive Last Verified Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
