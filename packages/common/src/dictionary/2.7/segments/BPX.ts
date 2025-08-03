import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BPX: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - BPX',
    },
    '5': {
      desc: 'BC Donation ID ',
      opt: 'C',
    },
    '6': {
      desc: 'BC Component ',
      opt: 'C',
    },
    '7': {
      desc: 'BC Donation Type / Intended Use ',
    },
    '8': {
      desc: 'CP Commercial Product ',
      opt: 'C',
    },
    '9': {
      desc: 'CP Manufacturer ',
      opt: 'C',
    },
    '10': {
      desc: 'CP Lot Number ',
      opt: 'C',
    },
    '11': {
      desc: 'BP Blood Group ',
    },
    '12': {
      desc: 'BC Special Testing ',
    },
  },
};
