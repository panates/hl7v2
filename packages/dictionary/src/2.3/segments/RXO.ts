import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXO: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy prescription order segment',
  fields: {
    '8': {
      desc: 'Deliver To Location',
      len: 200,
    },
    '15': {
      desc: "Pharmacist/Treatment Supplier's Verifier ID",
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
      len: 60,
    },
    '20': {
      type: 'CE',
      desc: 'Indication',
      opt: 'O',
      rep: 1,
      len: 200,
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
      len: 60,
    },
  },
};
