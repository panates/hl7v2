import { HL7MessageDefinition } from '../../types.js';

export const UDM_Q05: HL7MessageDefinition = {
  desc: 'Unsolicited display update message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    URD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'URD - results/update definition segment',
    },
    URS: {
      idx: 2,
      max: 1,
      desc: 'URS - unsolicited selection segment',
    },
    DSP: {
      idx: 3,
      min: 1,
      desc: 'DSP - display data segment',
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};
