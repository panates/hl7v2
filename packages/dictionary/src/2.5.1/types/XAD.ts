import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const XAD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Extended Address',
  fields: {
    '1': {
      type: 'SAD',
      desc: 'Street Address',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'ST',
      desc: 'Other Designation',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'City',
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
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'ID',
      desc: 'Country',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ID',
      desc: 'Address Type',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Other Geographic Designation',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'IS',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'IS',
      desc: 'Census Tract',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'DR',
      desc: 'Address Validity Range',
      opt: 'O',
      rep: 1,
    },
  },
};
