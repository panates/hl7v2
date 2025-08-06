import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CM_OSD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Order Sequence',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Sequence/results Flag',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Placer Order Number Entity Identifier',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'IS',
      desc: 'Placer Order Number Namespace ID',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ST',
      desc: 'Filler Order Number Entity Identifier',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'IS',
      desc: 'Filler Order Number Namespace ID',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Sequence Condition Value',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Maximum Number Of Repeats',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Placer Order Number Universal ID',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'ID',
      desc: 'Placer Order Number Universal ID Type',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'Filler Order Number Universal ID',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Filler Order Number Universal ID Type',
      opt: 'O',
      rep: 1,
    },
  },
};
