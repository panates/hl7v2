import { HL7MessageDefinition } from '../../types.js';

export const RAS_O02: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment administration message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and comments segment',
    },
    PATIENT: {
      idx: 2,
      max: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments segment',
        },
      },
    },
  },
};
