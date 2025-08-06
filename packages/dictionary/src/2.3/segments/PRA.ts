import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Practitioner detail segment',
  fields: {
    '1': {
      desc: 'PRA - Primary Key Value',
    },
    '2': {
      desc: 'Practioner Group',
    },
    '3': {
      desc: 'Practioner Category',
    },
    '4': {
      table: 186,
    },
    '7': {
      len: 200,
    },
  },
};
