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
      type: 'CWE',
    },
    '7': {
      type: 'DTM',
    },
    '8': {
      type: 'DTM',
      opt: 'O',
    },
    '9': {
      opt: 'O',
    },
    '11': {
      type: 'ID',
      table: 65,
    },
    '12': {
      type: 'CWE',
      desc: 'Danger Code',
    },
    '13': {
      desc: 'Relevant Clinical Information',
    },
    '16': {
      desc: 'Ordering Provider',
    },
    '17': {
      desc: 'Order Callback Phone Number',
    },
    '22': {
      type: 'DTM',
    },
    '23': {
      type: 'MOC',
    },
    '24': {
      desc: 'Diagnostic Serv Sect ID',
    },
    '26': {
      type: 'PRL',
    },
    '27': {
      rep: 'infinite',
    },
    '28': {
      desc: 'Result Copies To',
      rep: 'infinite',
    },
    '29': {
      type: 'EIP',
    },
    '30': {
      desc: 'Transportation Mode',
    },
    '31': {
      type: 'CWE',
      desc: 'Reason for Study',
    },
    '32': {
      type: 'NDL',
    },
    '33': {
      type: 'NDL',
      rep: 'infinite',
    },
    '34': {
      type: 'NDL',
      rep: 'infinite',
    },
    '35': {
      type: 'NDL',
      rep: 'infinite',
    },
    '36': {
      type: 'DTM',
    },
    '37': {
      desc: 'Number of Sample Containers *',
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
    '43': {
      type: 'CWE',
    },
    '44': {
      type: 'CNE',
      desc: 'Procedure Code',
      opt: 'O',
      rep: 1,
    },
    '45': {
      type: 'CNE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
    },
    '46': {
      type: 'CWE',
    },
    '47': {
      type: 'CWE',
    },
    '48': {
      type: 'CWE',
      rep: 1,
    },
    '49': {
      desc: 'Result Handling',
      opt: 'O',
      rep: 1,
      table: 507,
    },
  },
};
