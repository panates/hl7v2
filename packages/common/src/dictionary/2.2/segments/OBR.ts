import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OBR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - Observation Request',
    },
    '2': {
      type: 'CM_PLACER',
      desc: 'Placer Order Number',
    },
    '3': {
      type: 'CM_FILLER',
      desc: 'Filler Order Number',
    },
    '4': {
      desc: 'Universal Service ID',
    },
    '5': {
      type: 'ID',
    },
    '6': {
      desc: 'Requested date / time',
      len: 26,
    },
    '7': {
      desc: 'Observation date / time',
      opt: 'O',
      len: 26,
    },
    '8': {
      desc: 'Observation end date / time',
      opt: 'O',
      len: 26,
    },
    '9': {
      type: 'CQ_QUANTITY',
      desc: 'Collection Volume',
      opt: 'O',
    },
    '10': {
      desc: 'Collector Identifier',
    },
    '11': {
      type: 'ID',
      table: 65,
    },
    '12': {
      type: 'CE',
      desc: 'Danger Code',
    },
    '13': {
      desc: 'Relevant clinical information',
    },
    '14': {
      desc: 'Specimen received date / time',
      opt: 'O',
      len: 26,
    },
    '15': {
      type: 'CM_SPS',
    },
    '16': {
      desc: 'Ordering Provider',
      rep: 1,
      len: 80,
    },
    '17': {
      desc: 'Order Callback Phone Number',
    },
    '18': {
      desc: 'Placer field 1',
    },
    '19': {
      desc: 'Placer field 2',
    },
    '20': {
      desc: 'Filler Field 1',
    },
    '21': {
      desc: 'Filler Field 2',
    },
    '22': {
      desc: 'Results report / status change - date / time',
      opt: 'O',
      len: 26,
    },
    '23': {
      type: 'CM_MOC',
      desc: 'Charge to Practice',
    },
    '24': {
      desc: 'Diagnostic service section ID',
    },
    '25': {
      desc: 'Result Status',
    },
    '26': {
      type: 'CM_PARENT_RESULT',
      desc: 'Parent Result',
    },
    '27': {
      type: 'TQ',
      desc: 'Quantity / timing',
    },
    '28': {
      desc: 'Result Copies To',
      len: 150,
    },
    '29': {
      type: 'CM_EIP',
      desc: 'Parent Number',
    },
    '30': {
      desc: 'Transportation Mode',
    },
    '31': {
      desc: 'Reason for Study',
    },
    '32': {
      type: 'CM_NDL',
      desc: 'Principal Result Interpreter',
    },
    '33': {
      type: 'CM_NDL',
      desc: 'Assistant Result Interpreter',
      rep: 'infinite',
    },
    '34': {
      type: 'CM_NDL',
      rep: 'infinite',
    },
    '35': {
      type: 'CM_NDL',
      rep: 'infinite',
    },
    '36': {
      desc: 'Scheduled date / time',
      len: 26,
    },
  },
};
