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
    URD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Results/update definition',
    },
    URS: {
      idx: 2,
      max: 1,
      desc: 'Unsolicited selection',
    },
    DSP: {
      idx: 3,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
