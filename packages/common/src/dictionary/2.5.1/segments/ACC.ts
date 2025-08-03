import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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
      desc: 'Accident Code',
      opt: 'O',
      rep: 1,
      len: 250,
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
      len: 250,
      table: 347,
    },
    '5': {
      type: 'ID',
      desc: 'Accident Job Related Indicator',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '6': {
      type: 'ID',
      desc: 'Accident Death Indicator',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '7': {
      type: 'XCN',
      desc: 'Entered By',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '8': {
      type: 'ST',
      desc: 'Accident Description',
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '9': {
      type: 'ST',
      desc: 'Brought In By',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '10': {
      type: 'ID',
      desc: 'Police Notified Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
