import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DSP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - Display Data',
    },
    '2': {
      desc: 'Display Level',
    },
    '3': {
      desc: 'Data Line',
    },
    '4': {
      desc: 'Logical Break Point',
    },
    '5': {
      desc: 'Result ID',
    },
  },
};
