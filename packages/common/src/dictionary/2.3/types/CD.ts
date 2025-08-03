import { DeepPartial } from 'ts-gems';
import { HL7DataTypeDefinition } from '../../../interfaces/index.js';

export const CD: DeepPartial<HL7DataTypeDefinition> = {
  desc: 'Channel Definition',
  fields: {
    '1': {
      type: 'CM_WVI',
      desc: 'Channel Identifier',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CM_CD_ELECTRODE',
      desc: 'Electrode Names',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CM_CSU',
      desc: 'Channel Sensitivity/units',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CM_CCP',
      desc: 'Calibration Parameters',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'NM',
      desc: 'Sampling Frequency',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CM_MDV',
      desc: 'Minimum/maximum Data Values',
      opt: 'O',
      rep: 1,
    },
  },
};
