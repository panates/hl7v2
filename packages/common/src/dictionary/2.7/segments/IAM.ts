import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IAM: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - IAM',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Allergen Type Code',
      opt: 'O',
      rep: 1,
      table: 127,
    },
    '3': {
      desc: 'Allergen Code/Mnemonic/Description',
      opt: 'R',
      rep: 1,
    },
    '4': {
      desc: 'Allergy Severity Code',
      opt: 'O',
      rep: 1,
      table: 128,
    },
    '5': {
      type: 'ST',
      desc: 'Allergy Reaction Code',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'CNE',
      desc: 'Allergy Action Code',
      opt: 'R',
      rep: 1,
    },
    '7': {
      type: 'EI',
      desc: 'Allergy Unique Identifier',
      opt: 'C',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Action Reason',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Sensitivity to Causative Agent Code',
      opt: 'O',
      rep: 1,
      table: 436,
    },
    '10': {
      desc: 'Allergen Group Code/Mnemonic/Description',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'DT',
      desc: 'Onset Date',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'Onset Date Text',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Reported Date/Time',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'XPN',
      desc: 'Reported By',
      opt: 'O',
      rep: 1,
    },
    '15': {
      desc: 'Relationship to Patient Code',
      opt: 'O',
      rep: 1,
      table: 63,
    },
    '16': {
      desc: 'Alert Device Code',
      opt: 'O',
      rep: 1,
      table: 437,
    },
    '17': {
      desc: 'Allergy Clinical Status Code',
      opt: 'O',
      rep: 1,
      table: 438,
    },
    '18': {
      type: 'XCN',
      desc: 'Statused by Person',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'XON',
      desc: 'Statused by Organization',
      opt: 'O',
      rep: 1,
    },
    '20': {
      desc: 'Statused at Date/Time',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'XCN',
      desc: 'Inactivated by Person',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'DTM',
      desc: 'Inactivated Date/Time',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'XCN',
      desc: 'Initially Recorded by Person',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'DTM',
      desc: 'Initially Recorded Date/Time',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'XCN',
      desc: 'Modified by Person',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'DTM',
      desc: 'Modified Date/Time',
      opt: 'O',
      rep: 1,
    },
    '27': {
      type: 'CWE',
      desc: 'Clinician Identified Code',
      opt: 'O',
      rep: 1,
    },
    '28': {
      type: 'XON',
      desc: 'Initially Recorded by Organization',
      opt: 'O',
      rep: 1,
    },
    '29': {
      type: 'XON',
      desc: 'Modified by Organization',
      opt: 'O',
      rep: 1,
    },
    '30': {
      type: 'XON',
      desc: 'Inactivated by Organization',
      opt: 'O',
      rep: 1,
    },
  },
};
