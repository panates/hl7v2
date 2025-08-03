import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM3: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Categorical test/observation',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Segment Type ID',
      opt: 'O',
      rep: 1,
      len: 3,
    },
    '2': {
      type: 'NM',
      desc: 'Sequence Number - Test/ Observation Master File',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'ID',
      desc: 'Preferred Coding System',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '4': {
      type: 'CE',
      desc: 'Valid coded answers',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '5': {
      type: 'CE',
      desc: 'Normal test codes for categorical observations',
      opt: 'O',
      rep: 'infinite',
      len: 200,
    },
    '6': {
      type: 'CE',
      desc: 'Abnormal test codes for categorical observations',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '7': {
      type: 'CE',
      desc: 'Critical test codes for categorical observations',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '8': {
      type: 'ID',
      desc: 'Data Type',
      opt: 'O',
      rep: 1,
      len: 2,
    },
  },
};
