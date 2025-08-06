import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Field Separator',
    },
    '3': {
      len: 227,
    },
    '4': {
      len: 227,
    },
    '5': {
      len: 227,
    },
    '6': {
      len: 227,
    },
    '7': {
      desc: 'Date/Time Of Message',
      len: 26,
    },
    '9': {
      type: 'MSG',
    },
    '10': {
      desc: 'Message Control ID',
    },
    '11': {
      desc: 'Processing ID',
    },
    '12': {
      type: 'VID',
      desc: 'Version ID',
      len: 60,
    },
    '15': {
      type: 'ID',
      desc: 'Accept Acknowledgment Type',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 155,
    },
    '16': {
      type: 'ID',
      desc: 'Application Acknowledgment Type',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 155,
    },
    '17': {
      type: 'ID',
      opt: 'O',
      rep: 1,
    },
    '18': {
      rep: 'infinite',
      len: 16,
    },
    '19': {
      desc: 'Principal Language Of Message',
    },
    '20': {
      type: 'ID',
      desc: 'Alternate Character Set Handling Scheme',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 356,
    },
    '21': {
      type: 'EI',
      desc: 'Message Profile Identifier',
      len: 427,
    },
  },
};
