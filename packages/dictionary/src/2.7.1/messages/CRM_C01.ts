import { HL7MessageDefinition } from '../../types.js';

export const CRM_C01: HL7MessageDefinition = {
  desc: 'Register a patient on a clinical trial',
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
    PATIENT: {
      idx: 3,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PRT: {
          idx: 1,
          desc: 'Participation (for Patient',
        },
        PATIENT_VISIT: {
          idx: 2,
          max: 1,
          desc: 'Patient Visit',
          segments: {
            PV1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient Visit',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Patient Visit',
            },
          },
        },
        CSR: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Clinical Study Registration',
        },
        CSP: {
          idx: 4,
          desc: 'Clinical Study Phase',
        },
      },
    },
  },
};
