import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CM_CCP: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Calibration Parameters',
  fields: {
    '1': {
      type: 'NM',
      desc: 'Sensitivity Correction Factor',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'NM',
      desc: 'Baseline',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'NM',
      desc: 'Time Skew',
      opt: 'O',
      rep: 1,
    },
  },
};
