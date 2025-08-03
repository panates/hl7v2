import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Definition',
  fields: {
    '1': {
      desc: 'Channel Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      desc: 'Waveform Source',
      opt: 'O',
      rep: 1,
    },
    '3': {
      desc: 'Channel Sensitivity and Units',
      opt: 'O',
      rep: 1,
    },
    '4': {
      desc: 'Channel Calibration Parameters',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Channel Sampling Frequency',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Minimum and Maximum Data Values',
      opt: 'O',
      rep: 1,
    },
  },
};
