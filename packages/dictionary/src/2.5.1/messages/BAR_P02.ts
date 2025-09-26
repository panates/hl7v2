import { HL7MessageDefinition } from '../../types.js';

export const BAR_P02: HL7MessageDefinition = {
  desc: 'Purge patient accounts',
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
    PATIENT: {
      idx: 3,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient additional demographic',
        },
        PV1: {
          idx: 2,
          max: 1,
          desc: 'Patient visit',
        },
        DB1: {
          idx: 3,
          desc: 'Disability',
        },
      },
    },
  },
};
