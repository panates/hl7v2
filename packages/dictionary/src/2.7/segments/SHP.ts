import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const SHP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Shipment',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Shipment ID',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Internal Shipment ID',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'CWE',
      desc: 'Shipment Status',
      opt: 'O',
      rep: 1,
      table: 905,
    },
    '4': {
      type: 'DTM',
      desc: 'Shipment Status Date/Time',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'TX',
      desc: 'Shipment Status Reason',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Shipment Priority',
      opt: 'O',
      rep: 1,
      table: 906,
    },
    '7': {
      type: 'CWE',
      desc: 'Shipment Confidentiality',
      opt: 'O',
      rep: 'infinite',
      table: 907,
    },
    '8': {
      type: 'NM',
      desc: 'Number of Packages in Shipment',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'CWE',
      desc: 'Shipment Condition',
      opt: 'O',
      rep: 'infinite',
      table: 544,
    },
    '10': {
      type: 'CWE',
      desc: 'Shipment Handling Code',
      opt: 'O',
      rep: 'infinite',
      table: 376,
    },
    '11': {
      type: 'CWE',
      desc: 'Shipment Risk Code',
      opt: 'O',
      rep: 'infinite',
      table: 489,
    },
  },
};
