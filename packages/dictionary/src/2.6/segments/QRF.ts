import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Original style query filter',
  fields: {
    '1': {
      desc: 'Where Subject Filter',
    },
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'DTM',
      len: 24,
    },
    '4': {
      desc: 'What User Qualifier',
    },
    '5': {
      desc: 'Other QRY Subject Filter',
    },
    '6': {
      type: 'ID',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 156,
    },
    '7': {
      type: 'ID',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 157,
    },
    '8': {
      type: 'ID',
      opt: 'O',
      rep: 'infinite',
      len: 12,
      table: 158,
    },
  },
};
