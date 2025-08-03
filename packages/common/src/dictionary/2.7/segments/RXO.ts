import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXO: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Order',
  fields: {
    '1': {
      opt: 'C',
    },
    '2': {
      opt: 'C',
    },
    '4': {
      opt: 'C',
    },
    '5': {
      opt: 'C',
    },
    '6': {
      desc: "Provider's Pharmacy/Treatment Instructions",
    },
    '7': {
      desc: "Provider's Administration Instructions",
    },
    '8': {
      desc: 'Deliver-To Location',
    },
    '14': {
      desc: "Ordering Provider's DEA Number",
    },
    '15': {
      desc: "Pharmacist/Treatment Supplier's Verifier ID",
      opt: 'C',
    },
    '16': {
      table: 136,
    },
    '17': {
      desc: 'Requested Give Per (Time Unit)',
      opt: 'C',
    },
    '18': {
      type: 'NM',
      desc: 'Requested Give Strength',
      opt: 'O',
      rep: 1,
    },
    '19': {
      desc: 'Requested Give Strength Units',
      opt: 'O',
      rep: 1,
    },
    '20': {
      desc: 'Indication',
      opt: 'O',
    },
    '21': {
      type: 'ST',
      desc: 'Requested Give Rate Amount',
      opt: 'O',
      rep: 1,
    },
    '22': {
      desc: 'Requested Give Rate Units',
      opt: 'O',
      rep: 1,
    },
    '24': {
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
    },
    '31': {
      opt: 'C',
    },
    '36': {
      type: 'XTN',
      desc: 'Pharmacy Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
