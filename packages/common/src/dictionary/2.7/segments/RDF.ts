import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RDF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Table Row Definition',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Number of Columns per Row',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'RCD',
      desc: 'Column Description',
      opt: 'R',
      rep: 'infinite',
      table: 440,
    },
  },
};
