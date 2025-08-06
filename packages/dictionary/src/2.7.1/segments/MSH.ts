import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MSH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Field Separator',
    },
    '3': {
      table: 361,
    },
    '4': {
      table: 362,
    },
    '5': {
      table: 361,
    },
    '6': {
      table: 362,
    },
    '7': {
      type: 'DTM',
    },
    '9': {
      type: 'MSG',
    },
    '10': {
      desc: 'Message Control ID',
      len: 199,
    },
    '11': {
      desc: 'Processing ID',
    },
    '12': {
      type: 'VID',
      desc: 'Version ID',
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
    },
    '19': {
      type: 'CWE',
      desc: 'Principal Language Of Message',
    },
    '20': {
      type: 'ID',
      desc: 'Alternate Character Set Handling Scheme',
      opt: 'O',
      rep: 1,
      table: 356,
    },
    '21': {
      type: 'EI',
      desc: 'Message Profile Identifier',
    },
    '22': {
      type: 'XON',
      desc: 'Sending Responsible Organization',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'XON',
      desc: 'Receiving Responsible Organization',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'HD',
      desc: 'Sending Network Address',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'HD',
      desc: 'Receiving Network Address',
      opt: 'O',
      rep: 1,
    },
  },
};
