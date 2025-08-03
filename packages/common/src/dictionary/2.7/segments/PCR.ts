import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PCR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Possible Causal Relationship',
  fields: {
    '1': {
      desc: 'Implicated Product',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'IS',
      desc: 'Generic Product',
      opt: 'O',
      rep: 1,
      table: 249,
    },
    '3': {
      desc: 'Product Class',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CQ',
      desc: 'Total Duration Of Therapy',
      opt: 'O',
      rep: 1,
    },
    '5': {
      desc: 'Product Manufacture Date',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Product Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Product Implantation Date',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Product Explantation Date',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Single Use Device',
      opt: 'O',
      rep: 1,
      table: 244,
    },
    '10': {
      desc: 'Indication For Product Use',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'Product Problem',
      opt: 'O',
      rep: 1,
      table: 245,
    },
    '12': {
      type: 'ST',
      desc: 'Product Serial/Lot Number',
      opt: 'O',
      rep: 3,
    },
    '13': {
      type: 'CWE',
      desc: 'Product Available For Inspection',
      opt: 'O',
      rep: 1,
      table: 246,
    },
    '14': {
      desc: 'Product Evaluation Performed',
      opt: 'O',
      rep: 1,
    },
    '15': {
      desc: 'Product Evaluation Status',
      opt: 'O',
      rep: 1,
      table: 247,
    },
    '16': {
      desc: 'Product Evaluation Results',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'ID',
      desc: 'Evaluated Product Source',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 248,
    },
    '18': {
      desc: 'Date Product Returned To Manufacturer',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'ID',
      desc: 'Device Operator Qualifications',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 242,
    },
    '20': {
      type: 'ID',
      desc: 'Relatedness Assessment',
      opt: 'O',
      rep: 1,
      table: 250,
    },
    '21': {
      type: 'ID',
      desc: 'Action Taken In Response To The Event',
      opt: 'O',
      rep: 6,
      len: 2,
      table: 251,
    },
    '22': {
      type: 'ID',
      desc: 'Event Causality Observations',
      opt: 'O',
      rep: 6,
      len: 2,
    },
    '23': {
      type: 'ID',
      desc: 'Indirect Exposure Mechanism',
      opt: 'O',
      rep: 3,
      table: 253,
    },
  },
};
