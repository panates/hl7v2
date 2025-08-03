import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM7: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Additional Basic Attributes',
  fields: {
    '1': {
      type: 'NM',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Universal Service Identifier',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Category Identifier',
      opt: 'O',
      rep: 'infinite',
      table: 412,
    },
    '4': {
      type: 'TX',
      desc: 'Category Description',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Category Synonym',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      desc: 'Effective Test/Service Start Date/Time',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Effective Test/Service End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'Test/Service Default Duration Quantity ',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Test/Service Default Duration Units',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'CWE',
      desc: 'Test/Service Default Frequency ',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Consent Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '12': {
      desc: 'Consent Identifier',
      opt: 'O',
      rep: 1,
      table: 413,
    },
    '13': {
      desc: 'Consent Effective Start Date/Time',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Consent Effective End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'NM',
      desc: 'Consent Interval Quantity',
      opt: 'O',
      rep: 1,
    },
    '16': {
      desc: 'Consent Interval Units',
      opt: 'C',
      rep: 1,
      table: 414,
    },
    '17': {
      type: 'NM',
      desc: 'Consent Waiting Period Quantity',
      opt: 'O',
      rep: 1,
    },
    '18': {
      desc: 'Consent Waiting Period Units',
      opt: 'C',
      rep: 1,
      table: 414,
    },
    '19': {
      desc: 'Effective Date/Time of Change',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'XCN',
      desc: 'Entered By',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'PL',
      desc: 'Orderable-at Location',
      opt: 'O',
      rep: 'infinite',
    },
    '22': {
      type: 'CWE',
      desc: 'Formulary Status',
      opt: 'O',
      rep: 1,
      table: 473,
    },
    '23': {
      type: 'ID',
      desc: 'Special Order Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '24': {
      desc: 'Primary Key Value - CDM',
      opt: 'O',
      rep: 'infinite',
    },
  },
};
