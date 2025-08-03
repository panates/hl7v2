import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const REL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      desc: 'Relationship Type',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'EI',
      desc: 'This Relationship Instance Identifier',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Source Information Instance Identifier',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'EI',
      desc: 'Target Information Instance Identifier',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'EI',
      desc: 'Asserting Entity Instance ID',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'XCN',
      desc: 'Asserting Person',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'XON',
      desc: 'Asserting Organization',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'XAD',
      desc: 'Assertor Address',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'XTN',
      desc: 'Assertor Contact',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'DR',
      desc: 'Assertion Date Range',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Negation Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '13': {
      type: 'CWE',
      desc: 'Certainty of Relationship',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'NM',
      desc: 'Priority No',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'ID',
      desc: 'Separability Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
