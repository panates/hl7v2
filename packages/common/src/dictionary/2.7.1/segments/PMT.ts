import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PMT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Payment Information',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Payment/Remittance Advice Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'DTM',
      desc: 'Payment/Remittance Effective Date/Time',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'DTM',
      desc: 'Payment/Remittance Expiration Date/Time',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Payment Method',
      opt: 'R',
      rep: 1,
      table: 570,
    },
    '5': {
      type: 'DTM',
      desc: 'Payment/Remittance Date/Time',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'CP',
      desc: 'Payment/Remittance Amount',
      opt: 'R',
      rep: 1,
    },
    '7': {
      type: 'EI',
      desc: 'Check Number',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'XON',
      desc: 'Payee Bank Identification',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'Payee Transit Number',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'CX',
      desc: 'Payee Bank Account ID',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'XON',
      desc: 'Payment Organization',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'ESR-Code-Line',
      opt: 'O',
      rep: 1,
    },
  },
};
