import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const OSD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Order Sequence Definition',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Sequence/Results Flag',
      opt: 'R',
      rep: 1,
      table: 524,
    },
    '2': {
      type: 'ST',
      desc: 'Placer Order Number: Entity Identifier',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'IS',
      desc: 'Placer Order Number: Namespace ID',
      opt: 'O',
      rep: 1,
      table: 363,
    },
    '4': {
      type: 'ST',
      desc: 'Filler Order Number: Entity Identifier',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'IS',
      desc: 'Filler Order Number: Namespace ID',
      opt: 'O',
      rep: 1,
      table: 363,
    },
    '6': {
      type: 'ST',
      desc: 'Sequence Condition Value',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'NM',
      desc: 'Maximum Number of Repeats',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Placer Order Number: Universal ID',
      opt: 'R',
      rep: 1,
    },
    '9': {
      type: 'ID',
      desc: 'Placer Order Number: Universal ID Type',
      opt: 'O',
      rep: 1,
      table: 301,
    },
    '10': {
      type: 'ST',
      desc: 'Filler Order Number: Universal ID',
      opt: 'R',
      rep: 1,
    },
    '11': {
      type: 'ID',
      desc: 'Filler Order Number: Universal ID Type',
      opt: 'O',
      rep: 1,
      table: 301,
    },
  },
};
