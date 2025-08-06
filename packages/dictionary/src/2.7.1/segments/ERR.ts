import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Error Code and Location',
    },
    '2': {
      type: 'ERL',
      desc: 'Error Location',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'CWE',
      desc: 'HL7 Error Code',
      opt: 'R',
      rep: 1,
      table: 357,
    },
    '4': {
      type: 'ID',
      desc: 'Severity',
      opt: 'R',
      rep: 1,
      table: 516,
    },
    '5': {
      type: 'CWE',
      desc: 'Application Error Code',
      opt: 'O',
      rep: 1,
      table: 533,
    },
    '6': {
      type: 'ST',
      desc: 'Application Error Parameter',
      opt: 'O',
    },
    '7': {
      type: 'TX',
      desc: 'Diagnostic Information',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'TX',
      desc: 'User Message',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Inform Person Indicator',
      opt: 'O',
      rep: 'infinite',
      table: 517,
    },
    '10': {
      type: 'CWE',
      desc: 'Override Type',
      opt: 'O',
      rep: 1,
      table: 518,
    },
    '11': {
      type: 'CWE',
      desc: 'Override Reason Code',
      opt: 'O',
      rep: 'infinite',
      table: 519,
    },
    '12': {
      type: 'XTN',
      desc: 'Help Desk Contact Point',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
