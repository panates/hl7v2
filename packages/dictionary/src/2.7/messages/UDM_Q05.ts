import { HL7MessageDefinition } from '../../types.js';

export const UDM_Q05: HL7MessageDefinition = {
  desc: 'Unsolicited Display Message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    URD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Results/Update Definition',
    },
    URS: {
      idx: 4,
      max: 1,
      desc: 'Results/Update Selection Criteria',
    },
    DSP: {
      idx: 5,
      min: 1,
      desc: 'Display Data',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
