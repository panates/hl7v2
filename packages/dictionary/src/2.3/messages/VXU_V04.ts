import { HL7MessageDefinition } from '../../types.js';

export const VXU_V04: HL7MessageDefinition = {
  desc: 'Unsolicited vaccination record update',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    PID: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 2,
      max: 1,
      desc: 'Patient demographic',
    },
    NK1: {
      idx: 3,
      desc: 'Next of kin',
    },
    PATIENT: {
      idx: 4,
      max: 1,
      desc: 'Patient',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
        },
      },
    },
    INSURANCE: {
      idx: 5,
      desc: 'Insurance',
      segments: {
        IN1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Insurance',
        },
        IN2: {
          idx: 1,
          max: 1,
          desc: 'Insurance additional info',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: 'Insurance additional info - certification',
        },
      },
    },
    ORDER: {
      idx: 6,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          max: 1,
          desc: 'Common order segment',
        },
        RXA: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Pharmacy administration segment',
        },
        RXR: {
          idx: 2,
          max: 1,
          desc: 'Pharmacy route segment',
        },
        OBSERVATION: {
          idx: 3,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation segment',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments segment',
            },
          },
        },
      },
    },
  },
};
