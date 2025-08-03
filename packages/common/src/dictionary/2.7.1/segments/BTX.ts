import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BTX: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Blood Product Transfusion/Disposition',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'EI',
      rep: 1,
    },
    '3': {
      type: 'CNE',
      rep: 1,
    },
    '4': {
      type: 'CNE',
      desc: 'BC Blood Group',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      rep: 1,
      table: 512,
    },
    '6': {
      type: 'XON',
      rep: 1,
    },
    '7': {
      type: 'EI',
      desc: 'CP Lot Number',
      rep: 1,
    },
    '8': {
      type: 'NM',
      desc: 'BP Quantity',
      opt: 'R',
      rep: 1,
    },
    '9': {
      type: 'NM',
      desc: 'BP Amount',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'CWE',
      desc: 'BP Units',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'CWE',
      desc: 'BP Transfusion/Disposition Status',
      opt: 'R',
      rep: 1,
      table: 513,
    },
    '12': {
      type: 'ID',
      desc: 'BP Message Status',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 511,
    },
    '13': {
      type: 'DTM',
      desc: 'BP Date/Time of Status',
      opt: 'R',
      rep: 1,
    },
    '14': {
      type: 'XCN',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'XCN',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'DTM',
      desc: 'BP Transfusion Start Date/Time of Status',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'DTM',
      desc: 'BP Transfusion End Date/Time of Status',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'CWE',
      desc: 'BP Adverse Reaction Type',
      opt: 'O',
      rep: 'infinite',
      table: 514,
    },
    '19': {
      type: 'CWE',
      desc: 'BP Transfusion Interrupted Reason',
      opt: 'O',
      rep: 1,
      table: 515,
    },
  },
};
