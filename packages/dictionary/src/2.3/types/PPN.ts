import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PPN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Performing Person Time Stamp',
  fields: {
    '1': {
      type: 'ST',
      desc: 'ID Number',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Family Name',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Given Name',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Middle Initial Or Name',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Suffix',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Prefix',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ID',
      desc: 'Source Table',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'HD',
      desc: 'Assigning Authority',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ID',
      desc: 'Name Type Code',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Identifier Check Digit',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Code Identifying The Check Digit Scheme Employed',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'IS',
      desc: 'Identifier Type Code',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'HD',
      desc: 'Assigning Facility',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'TS',
      desc: 'Date/Time Action Performed',
      opt: 'O',
      rep: 1,
    },
  },
};
