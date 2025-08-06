import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const PPN: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Performing Person Time Stamp',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Person Identifier',
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
      desc: 'Suffix (e.g., JR or III)',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Prefix (e.g., DR)',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      desc: 'Degree (e.g., MD)',
      opt: 'B',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'Source Table',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'HD',
      desc: 'Assigning Authority',
      opt: 'C',
      rep: 1,
      table: 363,
    },
    '10': {
      type: 'ID',
      desc: 'Name Type Code',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '11': {
      type: 'ST',
      desc: 'Identifier Check Digit',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ID',
      desc: 'Check Digit Scheme ',
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
      desc: 'Date/Time Action Performed',
      opt: 'O',
      rep: 1,
    },
    '17': {
      desc: 'Name Context',
      opt: 'O',
      rep: 1,
      table: 448,
    },
    '18': {
      type: 'ST',
      desc: 'Name Validity Range',
      opt: 'B',
      rep: 1,
    },
    '19': {
      type: 'ID',
      desc: 'Name Assembly Order',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'ST',
      desc: 'Security Check ',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'ID',
      desc: 'Security Check Scheme',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 904,
    },
  },
};
