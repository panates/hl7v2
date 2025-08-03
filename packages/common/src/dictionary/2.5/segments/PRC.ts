import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PRC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - PRC',
    },
    '2': {
      type: 'CE',
      desc: 'Facility ID - PRC',
      opt: 'O',
    },
    '4': {
      type: 'IS',
    },
    '13': {
      type: 'IS',
    },
    '18': {
      type: 'IS',
    },
  },
};
