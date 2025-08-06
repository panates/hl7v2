import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OM1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'General segment',
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
      opt: 'O',
      rep: 1,
    },
    '2': {
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'ID',
      opt: 'O',
    },
    '5': {
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'TX',
      rep: 1,
      len: 200,
    },
    '7': {
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '8': {
      opt: 'O',
      len: 200,
    },
    '9': {
      type: 'ST',
    },
    '10': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '12': {
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Identity of Instrument Used to Perform this Study',
      opt: 'O',
    },
    '14': {
      type: 'CE',
      opt: 'O',
      rep: 'infinite',
    },
    '15': {
      opt: 'O',
    },
    '16': {
      opt: 'O',
      len: 1,
    },
    '17': {
      type: 'XTN',
      opt: 'O',
    },
    '18': {
      type: 'IS',
      opt: 'R',
      rep: 1,
    },
    '19': {
      rep: 1,
    },
    '20': {
      opt: 'O',
      rep: 1,
    },
    '21': {
      desc: 'Date/Time Stamp for any change in Definition for the Observation',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'TS',
      desc: 'Effective Date/Time of Change',
      rep: 1,
      len: 26,
    },
    '23': {
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'NM',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '25': {
      opt: 'O',
    },
    '26': {
      type: 'ID',
      opt: 'O',
    },
    '27': {
      opt: 'O',
    },
    '28': {
      type: 'XAD',
      opt: 'O',
      rep: 'infinite',
    },
    '29': {
      type: 'XTN',
      opt: 'O',
    },
    '30': {
      type: 'IS',
      opt: 'O',
    },
    '31': {
      desc: 'Observations Required to Interpret the Obs',
      opt: 'O',
      rep: 1,
    },
    '32': {
      opt: 'O',
    },
    '33': {
      opt: 'O',
      rep: 1,
      len: 65536,
    },
    '34': {
      type: 'CE',
      opt: 'O',
      rep: 'infinite',
    },
    '35': {
      type: 'TX',
      opt: 'O',
    },
    '36': {
      opt: 'O',
      rep: 1,
    },
    '37': {
      opt: 'O',
    },
    '38': {
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '39': {
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '40': {
      opt: 'O',
    },
    '41': {
      opt: 'O',
    },
    '42': {
      opt: 'O',
      rep: 1,
    },
    '43': {
      desc: 'Point Versus Interval',
    },
    '44': {
      desc: 'Challenge Information',
    },
    '45': {
      desc: 'Relationship Modifier',
    },
    '46': {
      desc: 'Target Anatomic Site Of Test',
    },
    '47': {
      desc: 'Modality Of Imaging Measurement',
    },
  },
};
