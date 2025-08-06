import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XCN: DeepPartial<HL7DataTypeDefinition> = {
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
      desc: 'Second And Further Given Names Or Initials Thereof',
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
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'CE',
      desc: 'Name Context',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'DR',
      desc: 'Name Validity Range',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'ID',
      desc: 'Name Assembly Order',
      opt: 'O',
      rep: 1,
    },
  },
};
