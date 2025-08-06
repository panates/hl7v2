import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../types.js';

export const CCP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Calibration Parameters',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Channel Calibration Sensitivity Correction Factor',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Channel Calibration Baseline',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Channel Calibration Time Skew',
      opt: 'O',
      rep: 1,
    },
  },
};
