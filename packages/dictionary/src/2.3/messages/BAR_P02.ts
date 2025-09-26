import { HL7MessageDefinition } from '../../types.js';

export const BAR_P02: HL7MessageDefinition = {
  desc: 'Purge patient accounts',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PATIENT: {
      idx: 2,
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
          desc: 'Patient demographic',
        },
        PV1: {
          idx: 2,
          max: 1,
          desc: 'Patient visit',
        },
        DB1: {
          idx: 3,
          desc: 'Disability segment',
        },
      },
    },
  },
};
