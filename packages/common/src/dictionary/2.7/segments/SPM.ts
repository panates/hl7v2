import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const SPM: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - SPM',
    },
    '2': {
      desc: 'Specimen ID ',
    },
    '4': {
      desc: 'Specimen Type ',
    },
    '7': {
      desc: 'Specimen Collection Method ',
    },
    '13': {
      opt: 'C',
    },
    '14': {
      desc: 'Specimen Description ',
    },
    '15': {
      desc: 'Specimen Handling Code ',
    },
    '17': {
      desc: 'Specimen Collection Date/Time ',
    },
    '22': {
      desc: 'Specimen Quality ',
    },
    '23': {
      desc: 'Specimen Appropriateness ',
    },
    '24': {
      desc: 'Specimen Condition ',
    },
    '25': {
      desc: 'Specimen Current Quantity ',
    },
    '27': {
      desc: 'Container Type ',
    },
    '29': {
      desc: 'Specimen Child Role ',
    },
    '30': {
      type: 'CX',
      desc: 'Accession ID',
      opt: 'O',
      rep: 'infinite',
    },
    '31': {
      type: 'CX',
      desc: 'Other Specimen ID',
      opt: 'O',
      rep: 'infinite',
    },
    '32': {
      type: 'EI',
      desc: 'Shipment ID',
      opt: 'O',
      rep: 1,
    },
  },
};
