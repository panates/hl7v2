import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OBR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - OBR',
    },
    '2': {
      desc: 'Placer Order Number',
      rep: 1,
      len: 427,
    },
    '3': {
      desc: 'Filler Order Number',
      len: 427,
    },
    '4': {
      type: 'CWE',
      len: 705,
    },
    '5': {
      type: 'ID',
      desc: 'Priority _ OBR',
    },
    '6': {
      type: 'DTM',
      len: 24,
    },
    '7': {
      type: 'DTM',
      desc: 'Observation Date/Time',
      opt: 'O',
      len: 24,
    },
    '8': {
      type: 'DTM',
      desc: 'Observation End Date/Time',
      opt: 'O',
      len: 24,
    },
    '9': {
      desc: 'Collection Volume',
      opt: 'O',
      len: 722,
    },
    '10': {
      desc: 'Collector Identifier',
      len: 3220,
    },
    '11': {
      type: 'ID',
      desc: 'Specimen Action Code',
      table: 65,
    },
    '12': {
      type: 'CWE',
      desc: 'Danger Code',
      len: 705,
    },
    '13': {
      desc: 'Relevant Clinical Information',
    },
    '14': {
      type: 'DTM',
      desc: 'Specimen Received Date/Time',
      opt: 'O',
      len: 24,
    },
    '15': {
      type: 'SPS',
    },
    '16': {
      desc: 'Ordering Provider',
      len: 3220,
    },
    '17': {
      desc: 'Order Callback Phone Number',
      rep: 'infinite',
      len: 2743,
    },
    '18': {
      len: 199,
    },
    '19': {
      len: 199,
    },
    '20': {
      desc: 'Filler Field 1',
      len: 199,
    },
    '21': {
      desc: 'Filler Field 2',
      len: 199,
    },
    '22': {
      type: 'DTM',
      desc: 'Results Rpt/Status Chng - Date/Time',
      opt: 'O',
      len: 24,
    },
    '23': {
      type: 'MOC',
      desc: 'Charge to Practice',
      len: 504,
    },
    '24': {
      desc: 'Diagnostic Serv Sect ID',
    },
    '25': {
      desc: 'Result Status',
    },
    '26': {
      type: 'PRL',
      desc: 'Parent Result',
      len: 977,
    },
    '27': {
      type: 'TQ',
      opt: 'O',
      rep: 'infinite',
      len: 705,
    },
    '28': {
      desc: 'Result Copies To',
      rep: 'infinite',
      len: 3220,
    },
    '29': {
      type: 'EIP',
      desc: 'Parent Number',
      len: 855,
    },
    '30': {
      desc: 'Transportation Mode',
    },
    '31': {
      type: 'CWE',
      desc: 'Reason for Study',
      len: 705,
    },
    '32': {
      type: 'NDL',
      desc: 'Principal Result Interpreter',
      len: 831,
    },
    '33': {
      type: 'NDL',
      desc: 'Assistant Result Interpreter',
      rep: 'infinite',
      len: 831,
    },
    '34': {
      type: 'NDL',
      desc: 'Technician',
      rep: 'infinite',
      len: 831,
    },
    '35': {
      type: 'NDL',
      desc: 'Transcriptionist',
      rep: 'infinite',
      len: 831,
    },
    '36': {
      type: 'DTM',
      desc: 'Scheduled Date/Time',
      len: 24,
    },
    '37': {
      desc: 'Number of Sample Containers *',
      len: 16,
    },
    '38': {
      type: 'CWE',
      desc: 'Transport Logistics of Collected Sample',
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
    '43': {
      type: 'CWE',
      len: 705,
    },
    '44': {
      type: 'CNE',
      desc: 'Procedure Code',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '45': {
      type: 'CNE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
      len: 705,
    },
    '46': {
      type: 'CWE',
      len: 705,
    },
    '47': {
      type: 'CWE',
      len: 705,
    },
    '48': {
      type: 'CWE',
      desc: 'Medically Necessary Duplicate Procedure Reason.',
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '49': {
      type: 'IS',
      desc: 'Result Handling',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 507,
    },
    '50': {
      len: 705,
    },
  },
};
