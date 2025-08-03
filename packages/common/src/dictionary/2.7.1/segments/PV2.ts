import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PV2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Visit - Additional Information',
  fields: {
    '1': {
      desc: 'Prior Pending Location',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Accommodation Code',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CWE',
      desc: 'Admit Reason',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Transfer Reason',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Patient Valuables',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'ST',
      desc: 'Patient Valuables Location',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Visit User Code',
      opt: 'O',
      table: 130,
    },
    '8': {
      type: 'DTM',
      desc: 'Expected Admit Date/Time',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'DTM',
      desc: 'Expected Discharge Date/Time',
      opt: 'O',
      rep: 1,
    },
    '13': {
      rep: 'infinite',
    },
    '30': {
      type: 'CWE',
    },
    '33': {
      type: 'DTM',
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
    },
    '39': {
      type: 'CWE',
    },
    '40': {
      type: 'CWE',
    },
    '41': {
      type: 'CWE',
    },
    '42': {
      type: 'CWE',
    },
    '45': {
      type: 'CWE',
    },
    '47': {
      type: 'DTM',
    },
    '48': {
      type: 'DTM',
      desc: 'Expected Pre-admission Testing Date/Time',
      opt: 'O',
      rep: 1,
    },
    '49': {
      desc: 'Notify Clergy Code',
      opt: 'O',
      rep: 'infinite',
      table: 534,
    },
    '50': {
      type: 'DT',
      desc: 'Advance Directive Last Verified Date',
      opt: 'O',
      rep: 1,
    },
  },
};
