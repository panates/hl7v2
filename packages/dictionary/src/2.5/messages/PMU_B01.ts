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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    STF: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Staff identification',
    },
    PRA: {
      idx: 4,
      desc: 'Practitioner detail',
    },
    ORG: {
      idx: 5,
      desc: 'Practitioner organization unit',
    },
    AFF: {
      idx: 6,
      desc: 'Professional affiliation',
    },
    LAN: {
      idx: 7,
      desc: 'Language detail',
    },
    EDU: {
      idx: 8,
      desc: 'Educational detail',
    },
    CER: {
      idx: 9,
      desc: 'Certificate detail',
    },
  },
};
