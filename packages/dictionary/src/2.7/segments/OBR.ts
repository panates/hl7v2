import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OBR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation Request',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'EI',
      opt: 'C',
    },
    '3': {
      type: 'EI',
      opt: 'C',
      rep: 1,
    },
    '4': {
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Priority',
      opt: 'B',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Requested Date/Time',
      opt: 'B',
      rep: 1,
    },
    '7': {
      desc: 'Observation Date/Time #',
      opt: 'C',
      rep: 1,
    },
    '8': {
      desc: 'Observation End Date/Time #',
      rep: 1,
    },
    '9': {
      type: 'CQ',
      desc: 'Collection Volume *',
      rep: 1,
    },
    '10': {
      type: 'XCN',
      desc: 'Collector Identifier *',
      opt: 'O',
      rep: 'infinite',
    },
    '11': {
      desc: 'Specimen Action Code *',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '12': {
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      type: 'ST',
      desc: 'Specimen Received Date/Time *',
      opt: 'B',
      rep: 1,
    },
    '15': {
      type: 'ST',
      desc: 'Specimen Source',
      opt: 'B',
      rep: 1,
    },
    '16': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
    },
    '17': {
      type: 'XTN',
      opt: 'O',
      rep: 2,
    },
    '18': {
      type: 'ST',
      desc: 'Placer Field 1',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'ST',
      desc: 'Placer Field 2',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'ST',
      desc: 'Filler Field 1 +',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'ST',
      desc: 'Filler Field 2 +',
      opt: 'O',
      rep: 1,
    },
    '22': {
      desc: 'Results Rpt/Status Chng - Date/Time +',
      opt: 'C',
      rep: 1,
    },
    '23': {
      desc: 'Charge to Practice +',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 74,
    },
    '25': {
      type: 'ID',
      desc: 'Result Status +',
      opt: 'C',
      rep: 1,
      len: 1,
      table: 123,
    },
    '26': {
      desc: 'Parent Result +',
      opt: 'O',
      rep: 1,
    },
    '27': {
      type: 'ST',
      desc: 'Quantity/Timing',
      opt: 'B',
    },
    '28': {
      type: 'XCN',
      opt: 'O',
    },
    '29': {
      desc: 'Parent Result Observation Identifier ',
      opt: 'O',
      rep: 1,
    },
    '30': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 4,
      table: 124,
    },
    '31': {
      opt: 'O',
      rep: 'infinite',
    },
    '32': {
      desc: 'Principal Result Interpreter +',
      opt: 'O',
      rep: 1,
    },
    '33': {
      desc: 'Assistant Result Interpreter + ',
      opt: 'O',
    },
    '34': {
      desc: 'Technician +',
      opt: 'O',
    },
    '35': {
      desc: 'Transcriptionist +',
      opt: 'O',
    },
    '36': {
      desc: 'Scheduled Date/Time +',
      opt: 'O',
      rep: 1,
    },
    '37': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '38': {
      desc: 'Transport Logistics of Collected Sample *',
      opt: 'O',
      rep: 'infinite',
    },
    '39': {
      desc: "Collector's Comment *",
      opt: 'O',
      rep: 'infinite',
    },
    '40': {
      desc: 'Transport Arrangement Responsibility',
      opt: 'O',
      rep: 1,
    },
    '41': {
      type: 'ID',
      desc: 'Transport Arranged',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 224,
    },
    '42': {
      type: 'ID',
      desc: 'Escort Required',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 225,
    },
    '43': {
      desc: 'Planned Patient Transport Comment',
      opt: 'O',
      rep: 'infinite',
    },
    '44': {
      table: 88,
    },
    '45': {
      table: 340,
    },
    '46': {
      desc: 'Placer Supplemental Service Information',
      opt: 'O',
      rep: 'infinite',
      table: 411,
    },
    '47': {
      desc: 'Filler Supplemental Service Information',
      opt: 'O',
      rep: 'infinite',
      table: 411,
    },
    '48': {
      desc: 'Medically Necessary Duplicate Procedure Reason',
      opt: 'C',
      table: 476,
    },
    '49': {
      type: 'CWE',
    },
    '50': {
      type: 'CWE',
      desc: 'Parent Universal Service Identifier',
      opt: 'O',
      rep: 1,
    },
    '51': {
      type: 'EI',
      desc: 'Observation Group ID',
      opt: 'O',
      rep: 1,
    },
    '52': {
      type: 'EI',
      desc: 'Parent Observation Group ID',
      opt: 'O',
      rep: 1,
    },
    '53': {
      type: 'CX',
      desc: 'Alternate Placer Order Number',
      opt: 'O',
      rep: 'infinite',
    },
    '54': {
      type: 'EIP',
      desc: 'Parent Order',
      opt: 'O',
      rep: 1,
    },
  },
};
