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
    },
    '3': {
      desc: 'Filler Order Number',
    },
    '4': {
      desc: 'Universal Service ID',
    },
    '5': {
      type: 'ID',
      desc: 'Priority-OBR',
    },
    '6': {
      desc: 'Requested Date/time',
      len: 26,
    },
    '7': {
      desc: 'Observation Date/Time  ',
      opt: 'O',
      len: 26,
    },
    '8': {
      desc: 'Observation End Date/Time  ',
      opt: 'O',
      len: 26,
    },
    '9': {
      desc: 'Collection Volume *',
      opt: 'O',
    },
    '10': {
      desc: 'Collector Identifier *',
    },
    '11': {
      type: 'ID',
      desc: 'Specimen Action Code *',
      table: 65,
    },
    '12': {
      type: 'CE',
      desc: 'Danger Code',
    },
    '13': {
      desc: 'Relevant Clinical Info.',
    },
    '14': {
      desc: 'Specimen Received Date/Time *',
      opt: 'O',
      len: 26,
    },
    '15': {
      type: 'SPS',
    },
    '16': {
      desc: 'Ordering Provider',
    },
    '17': {
      desc: 'Order Callback Phone Number',
    },
    '20': {
      desc: 'Filler Field 1 +',
    },
    '21': {
      desc: 'Filler Field 2 +',
    },
    '22': {
      desc: 'Results Rpt/Status Chng - Date/Time +',
      opt: 'O',
      len: 26,
    },
    '23': {
      type: 'MOC',
      desc: 'Charge to Practice +',
    },
    '24': {
      desc: 'Diagnostic Serv Sect ID',
    },
    '25': {
      desc: 'Result Status +',
    },
    '26': {
      type: 'PRL',
      desc: 'Parent Result +',
    },
    '27': {
      type: 'TQ',
      opt: 'O',
      rep: 'infinite',
    },
    '28': {
      desc: 'Result Copies To',
      len: 150,
    },
    '29': {
      type: 'EIP',
      desc: 'Parent Number',
      len: 200,
    },
    '30': {
      desc: 'Transportation Mode',
    },
    '31': {
      desc: 'Reason for Study',
    },
    '32': {
      type: 'NDL',
      desc: 'Principal Result Interpreter +',
    },
    '33': {
      type: 'NDL',
      desc: 'Assistant Result Interpreter +',
      rep: 'infinite',
    },
    '34': {
      type: 'NDL',
      desc: 'Technician +',
      rep: 'infinite',
    },
    '35': {
      type: 'NDL',
      desc: 'Transcriptionist +',
      rep: 'infinite',
    },
    '36': {
      desc: 'Scheduled Date/Time +',
      len: 26,
    },
    '37': {
      desc: 'Number of Sample Containers *',
    },
    '38': {
      desc: 'Transport Logistics of Collected Sample *',
    },
    '39': {
      desc: 'Collector s Comment *',
    },
    '44': {
      type: 'CE',
      desc: 'Procedure Code',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '45': {
      type: 'CE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
  },
};
