import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DRG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CNE',
    },
    '2': {
      type: 'DTM',
    },
    '3': {
      len: 1,
    },
    '5': {
      type: 'CWE',
    },
    '12': {
      type: 'XPN',
      desc: 'Name of Coder',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'CWE',
      desc: 'Grouper Status',
      opt: 'O',
      rep: 1,
      table: 734,
    },
    '14': {
      type: 'CWE',
      desc: 'PCCL Value Code',
      opt: 'O',
      rep: 1,
      table: 728,
    },
    '15': {
      type: 'NM',
      desc: 'Effective Weight',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'MO',
      desc: 'Monetary Amount',
      opt: 'O',
      rep: 1,
    },
    '17': {
      desc: 'Status Patient',
      opt: 'O',
      rep: 1,
      table: 739,
    },
    '18': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'ST',
      desc: 'Grouper Software Version',
      opt: 'O',
      rep: 1,
    },
    '20': {
      desc: 'Status Financial Calculation',
      opt: 'O',
      rep: 1,
      table: 742,
    },
    '21': {
      type: 'MO',
      desc: 'Relative Discount/Surcharge',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'MO',
      desc: 'Basic Charge',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'MO',
      desc: 'Total Charge',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'MO',
      desc: 'Discount/Surcharge',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'NM',
      desc: 'Calculated Days',
      opt: 'O',
      rep: 1,
    },
    '26': {
      desc: 'Status Gender',
      opt: 'O',
      rep: 1,
      table: 749,
    },
    '27': {
      desc: 'Status Age',
      opt: 'O',
      rep: 1,
      table: 749,
    },
    '28': {
      desc: 'Status Length of Stay',
      opt: 'O',
      rep: 1,
      table: 749,
    },
    '29': {
      desc: 'Status Same Day Flag',
      opt: 'O',
      rep: 1,
      table: 749,
    },
    '30': {
      desc: 'Status Separation Mode',
      opt: 'O',
      rep: 1,
      table: 749,
    },
    '31': {
      desc: 'Status Weight at Birth',
      opt: 'O',
      rep: 1,
      table: 755,
    },
    '32': {
      desc: 'Status Respiration Minutes',
      opt: 'O',
      rep: 1,
      table: 757,
    },
    '33': {
      desc: 'Status Admission',
      opt: 'O',
      rep: 1,
      table: 759,
    },
  },
};
