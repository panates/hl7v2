import { HL7MessageDefinition } from '../../types.js';

export const CRM_C08: HL7MessageDefinition = {
  desc: 'Patient has gone off phase of clinical trial',
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
        PV1: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit',
        },
        CSR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Clinical Study Registration',
        },
        CSP: {
          idx: 3,
          desc: 'Clinical Study Phase',
        },
      },
    },
  },
};
