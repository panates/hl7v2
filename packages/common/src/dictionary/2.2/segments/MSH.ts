import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MSH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Field Separator',
    },
    '5': {
      len: 30,
    },
    '7': {
      desc: 'Date / Time of message',
      len: 26,
    },
    '10': {
      desc: 'Message Control ID',
    },
    '11': {
      desc: 'Processing ID',
    },
    '12': {
      type: 'ID',
      desc: 'Version ID',
      table: 104,
    },
    '15': {
      type: 'ID',
      desc: 'Accept acknowledgement type',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 155,
    },
    '16': {
      type: 'ID',
      desc: 'Application acknowledgement type',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 155,
    },
    '17': {
      type: 'ID',
      desc: 'Country code',
      opt: 'O',
      rep: 1,
      len: 2,
    },
  },
};
