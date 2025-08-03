import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ABS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Abstract',
  fields: {
    '1': {
      type: 'XCN',
      desc: 'Discharge Care Provider',
      opt: 'O',
      rep: 1,
      table: 10,
    },
    '2': {
      desc: 'Transfer Medical Service Code',
      opt: 'O',
      rep: 1,
      table: 69,
    },
    '3': {
      desc: 'Severity of Illness Code',
      opt: 'O',
      rep: 1,
      table: 421,
    },
    '4': {
      desc: 'Date/Time of Attestation',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'XCN',
      desc: 'Attested By',
      opt: 'O',
      rep: 1,
    },
    '6': {
      desc: 'Triage Code',
      opt: 'O',
      rep: 1,
      table: 422,
    },
    '7': {
      desc: 'Abstract Completion Date/Time ',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'XCN',
      desc: 'Abstracted By',
      opt: 'O',
      rep: 1,
    },
    '9': {
      desc: 'Case Category Code',
      opt: 'O',
      rep: 1,
      table: 423,
    },
    '10': {
      type: 'ID',
      desc: 'Caesarian Section Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '11': {
      desc: 'Gestation Category Code',
      opt: 'O',
      rep: 1,
      table: 424,
    },
    '12': {
      type: 'NM',
      desc: 'Gestation Period - Weeks',
      opt: 'O',
      rep: 1,
    },
    '13': {
      desc: 'Newborn Code',
      opt: 'O',
      rep: 1,
      table: 425,
    },
    '14': {
      type: 'ID',
      desc: 'Stillborn Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};
