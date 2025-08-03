import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IPC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Imaging Procedure Control Segment',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Accession Identifier',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Requested Procedure ID',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'EI',
      desc: 'Study Instance UID',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Scheduled Procedure Step ID',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Protocol Code',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      type: 'EI',
      desc: 'Scheduled Station Name',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'Scheduled Procedure Step Location',
      opt: 'O',
      rep: 'infinite',
    },
    '9': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
  },
};
