import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BTX: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - BTX',
    },
    '2': {
      desc: 'BC Donation ID ',
      opt: 'C',
    },
    '3': {
      desc: 'BC Component ',
      opt: 'C',
    },
    '4': {
      opt: 'C',
    },
    '5': {
      desc: 'CP Commercial Product ',
      opt: 'C',
    },
    '6': {
      desc: 'CP Manufacturer ',
      opt: 'C',
    },
    '7': {
      opt: 'C',
    },
    '14': {
      desc: 'BP Transfusion Administrator',
    },
    '15': {
      desc: 'BP Transfusion Verifier ',
    },
  },
};
