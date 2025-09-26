import { HL7MessageDefinition } from '../../types.js';

export const CRM_C01: HL7MessageDefinition = {
  desc: 'Register a patient on a clinical trial',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    PATIENT: {
      idx: 1,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'PID - patient identification segment',
        },
        PV1: {
          idx: 1,
          max: 1,
          desc: 'PV1 - patient visit segment-',
        },
        CSR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'CSR - clinical study registration segment',
        },
        CSP: {
          idx: 3,
          desc: 'CSP - clinical study phase segment',
        },
      },
    },
  },
};
