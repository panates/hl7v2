import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

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
      desc: 'Degree',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Source Table',
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
      rep: 1,
    },
    '13': {
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
    '17': {
      type: 'CE',
      desc: 'Name Context',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'DR',
      desc: 'Name Validity Range',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'ID',
      desc: 'Name Assembly Order',
      opt: 'O',
      rep: 1,
    },
  },
};
