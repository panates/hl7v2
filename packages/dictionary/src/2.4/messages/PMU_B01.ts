import { HL7MessageDefinition } from '../../types.js';

export const PMU_B01: HL7MessageDefinition = {
  desc: 'Add personnel record',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    STF: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Staff identification',
    },
    PRA: {
      idx: 3,
      desc: 'Practitioner detail',
    },
    ORG: {
      idx: 4,
      desc: 'Practitioner organization unit',
    },
    AFF: {
      idx: 5,
      desc: 'Professional affiliation',
    },
    LAN: {
      idx: 6,
      desc: 'Language detail',
    },
    EDU: {
      idx: 7,
      desc: 'Educational detail',
    },
  },
};
