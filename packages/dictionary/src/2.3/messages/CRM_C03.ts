import { HL7MessageDefinition } from '../../types.js';

export const CRM_C03: HL7MessageDefinition = {
  desc: 'Correct/update registration information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
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
          desc: 'Patient identification',
        },
        PV1: {
          idx: 1,
          max: 1,
          desc: 'Patient visit',
        },
        CSR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Clinical study registration',
        },
        CSP: {
          idx: 3,
          desc: 'Clinical study phase',
        },
      },
    },
  },
};
