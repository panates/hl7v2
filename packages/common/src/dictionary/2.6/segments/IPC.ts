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
      len: 427,
    },
    '2': {
      type: 'EI',
      desc: 'Requested Procedure ID',
      opt: 'R',
      rep: 1,
      len: 22,
    },
    '3': {
      type: 'EI',
      desc: 'Study Instance UID',
      opt: 'R',
      rep: 1,
      len: 70,
    },
    '4': {
      type: 'EI',
      desc: 'Scheduled Procedure Step ID',
      opt: 'R',
      rep: 1,
      len: 22,
    },
    '5': {
      type: 'CWE',
      desc: 'Modality',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '6': {
      type: 'CWE',
      desc: 'Protocol Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '7': {
      type: 'EI',
      desc: 'Scheduled Station Name',
      opt: 'O',
      rep: 1,
      len: 22,
    },
    '8': {
      type: 'CWE',
      desc: 'Scheduled Procedure Step Location',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '9': {
      type: 'ST',
      desc: 'Scheduled AE Title',
      opt: 'O',
      rep: 1,
      len: 16,
    },
  },
};
