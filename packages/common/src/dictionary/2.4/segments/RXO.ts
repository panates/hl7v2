import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXO: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Order',
  fields: {
    '1': {
      len: 250,
    },
    '4': {
      len: 250,
    },
    '5': {
      len: 250,
    },
    '6': {
      desc: "Provider's Pharmacy/Treatment Instructions",
      len: 250,
    },
    '7': {
      desc: "Provider's Administration Instructions",
      len: 250,
    },
    '8': {
      desc: 'Deliver-To Location',
      len: 200,
    },
    '10': {
      len: 250,
    },
    '12': {
      len: 250,
    },
    '13': {
      desc: 'Number of Refills',
    },
    '14': {
      desc: "Ordering Provider's DEA Number",
      len: 250,
    },
    '15': {
      desc: "Pharmacist/Treatment Supplier's Verifier ID",
      len: 250,
    },
    '16': {
      table: 136,
    },
    '18': {
      type: 'NM',
      desc: 'Requested Give Strength',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '19': {
      type: 'CE',
      desc: 'Requested Give Strength Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '20': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      len: 250,
    },
    '21': {
      type: 'ST',
      desc: 'Requested Give Rate Amount',
      opt: 'O',
      rep: 1,
      len: 6,
    },
    '22': {
      type: 'CE',
      desc: 'Requested Give Rate Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '24': {
      type: 'CE',
      desc: 'Supplementary Code',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
  },
};
