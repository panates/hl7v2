import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ACC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Accident',
  fields: {
    '1': {
      type: 'TS',
      desc: 'Accident Date/Time',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ID',
      desc: 'Accident Code',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 50,
    },
    '3': {
      type: 'ST',
      desc: 'Accident Location',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '4': {
      type: 'CE',
      desc: 'Auto Accident State',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'ID',
      desc: 'Accident Job Related Indicator',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 136,
    },
    '6': {
      type: 'ID',
      desc: 'Accident Death Indicator',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 136,
    },
  },
};
