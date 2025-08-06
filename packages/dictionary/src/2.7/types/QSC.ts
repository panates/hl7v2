import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const QSC: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Query Selection Criteria',
  fields: {
    '1': {
      type: 'ST',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Relational Operator',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Value',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      desc: 'Relational Conjunction',
      opt: 'O',
      rep: 1,
    },
  },
};
