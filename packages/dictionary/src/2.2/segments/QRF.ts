import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRF: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Where Subject Filter',
    },
    '2': {
      desc: 'When data start date / time',
      len: 26,
    },
    '3': {
      desc: 'When data end date / time',
      len: 26,
    },
    '4': {
      desc: 'What User Qualifier',
    },
    '5': {
      desc: 'Other QRY Subject Filter',
    },
    '6': {
      type: 'ID',
      desc: 'Which date / time qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 156,
    },
    '7': {
      type: 'ID',
      desc: 'Which date / time status qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 157,
    },
    '8': {
      type: 'ID',
      desc: 'Date / time selection qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 158,
    },
  },
};
