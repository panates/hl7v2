import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      rep: 1,
    },
    '4': {
      type: 'ID',
    },
    '5': {
      type: 'CWE',
      rep: 1,
    },
    '6': {
      type: 'TX',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
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
      type: 'CWE',
      desc: 'Identity of Instrument Used to Perform this Study',
      opt: 'O',
    },
    '14': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '15': {
      opt: 'O',
    },
    '16': {
      type: 'CWE',
      opt: 'O',
    },
    '17': {
      type: 'XTN',
      opt: 'O',
    },
    '18': {
      opt: 'R',
      rep: 1,
    },
    '19': {
      type: 'CWE',
      rep: 1,
    },
    '20': {
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'DTM',
      desc: 'Effective Date/Time of Change',
      rep: 1,
    },
    '23': {
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '25': {
      opt: 'O',
    },
    '26': {
      type: 'ID',
      opt: 'O',
    },
    '27': {
      type: 'CWE',
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
      type: 'CWE',
      opt: 'O',
    },
    '31': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '32': {
      opt: 'O',
    },
    '33': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '34': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '35': {
      type: 'TX',
      opt: 'O',
    },
    '36': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '37': {
      opt: 'O',
    },
    '38': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '39': {
      desc: 'Factors that may Affect the Observation',
      opt: 'O',
      rep: 1,
    },
    '40': {
      opt: 'O',
    },
    '41': {
      opt: 'O',
    },
    '42': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '43': {
      type: 'CWE',
      desc: 'Point Versus Interval',
    },
    '44': {
      desc: 'Challenge Information',
    },
    '45': {
      type: 'CWE',
      desc: 'Relationship Modifier',
    },
    '46': {
      type: 'CWE',
      desc: 'Target Anatomic Site Of Test',
    },
    '47': {
      type: 'CWE',
    },
  },
};
