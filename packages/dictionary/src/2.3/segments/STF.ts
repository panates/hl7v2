import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const STF: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'STF - Primary Key Value',
    },
    '3': {
      type: 'XPN',
    },
    '5': {
      type: 'IS',
    },
    '7': {
      desc: 'Active/Inactive Flag',
    },
    '10': {
      type: 'XTN',
    },
    '11': {
      desc: 'Office/Home Address',
    },
    '12': {
      len: 26,
    },
    '13': {
      len: 26,
    },
    '16': {
      type: 'CE',
      desc: 'Preferred Method of Contact',
      len: 200,
    },
    '17': {
      type: 'IS',
      desc: 'Marital Status',
      opt: 'O',
      rep: 'infinite',
      len: 1,
      table: 2,
    },
    '18': {
      type: 'ST',
      desc: 'Job Title',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '19': {
      type: 'JCC',
      desc: 'Job Code/Class',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '20': {
      type: 'IS',
      desc: 'Employment Status',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 66,
    },
    '21': {
      type: 'ID',
      desc: 'Additional Insured on Auto',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '22': {
      type: 'DLN',
      desc: "Driver's License Number",
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '23': {
      type: 'ID',
      desc: 'Copy Auto Ins',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '24': {
      type: 'DT',
      desc: 'Auto Ins. Expires',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '25': {
      type: 'DT',
      desc: 'Date Last DMV Review',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '26': {
      type: 'DT',
      desc: 'Date Next DMV Review',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};
