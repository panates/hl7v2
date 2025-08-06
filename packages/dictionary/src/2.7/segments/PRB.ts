import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PRB: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Problem Details',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Action Code',
      opt: 'R',
      rep: 1,
      len: 2,
      table: 287,
    },
    '2': {
      desc: 'Action Date/Time',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Problem ID',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Problem Instance ID',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'EI',
      desc: 'Episode of Care ID',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'NM',
      desc: 'Problem List Priority',
      opt: 'O',
      rep: 1,
    },
    '7': {
      desc: 'Problem Established Date/Time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Anticipated Problem Resolution Date/Time',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Actual Problem Resolution Date/Time',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Problem Classification',
      opt: 'O',
      rep: 1,
    },
    '11': {
      desc: 'Problem Management Discipline',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      desc: 'Problem Persistence',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Problem Confirmation Status',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Problem Life Cycle Status',
      opt: 'O',
      rep: 1,
    },
    '15': {
      desc: 'Problem Life Cycle Status Date/Time',
      opt: 'O',
      rep: 1,
    },
    '16': {
      desc: 'Problem Date of Onset',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'ST',
      desc: 'Problem Onset Text',
      opt: 'O',
      rep: 1,
    },
    '18': {
      desc: 'Problem Ranking',
      opt: 'O',
      rep: 1,
    },
    '19': {
      desc: 'Certainty of Problem',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'NM',
      desc: 'Probability of Problem (0-1)',
      opt: 'O',
      rep: 1,
    },
    '21': {
      desc: 'Individual Awareness of Problem',
      opt: 'O',
      rep: 1,
    },
    '22': {
      desc: 'Problem Prognosis',
      opt: 'O',
      rep: 1,
    },
    '23': {
      desc: 'Individual Awareness of Prognosis',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'ST',
      desc: 'Family/Significant Other Awareness of Problem/Prognosis',
      opt: 'O',
      rep: 1,
    },
    '25': {
      desc: 'Security/Sensitivity',
      opt: 'O',
      rep: 1,
    },
    '28': {
      opt: 'C',
    },
  },
};
