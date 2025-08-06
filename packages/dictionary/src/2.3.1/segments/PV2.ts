import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PV2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient visit - additional information segment',
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
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Admit Reason',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'CE',
      desc: 'Transfer Reason',
      opt: 'O',
      rep: 1,
      len: 60,
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
      rep: 1,
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
      len: 80,
    },
    '34': {
      len: 1,
    },
    '35': {
      desc: 'Military Non-Availability Code',
      len: 1,
    },
  },
};
