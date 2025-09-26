import { HL7MessageDefinition } from '../../types.js';

export const UDM_Q05: HL7MessageDefinition = {
  desc: 'Unsolicited display update message',
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
    URD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Results/update definition',
    },
    URS: {
      idx: 3,
      max: 1,
      desc: 'Unsolicited selection',
    },
    DSP: {
      idx: 4,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
