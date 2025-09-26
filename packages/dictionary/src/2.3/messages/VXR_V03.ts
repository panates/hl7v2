import { HL7MessageDefinition } from '../../types.js';

export const VXR_V03: HL7MessageDefinition = {
  desc: 'Vaccination record response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter segment',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 5,
      max: 1,
      desc: 'Patient demographic',
    },
    NK1: {
      idx: 6,
      desc: 'Next of kin',
    },
    PATIENT_VISIT: {
      idx: 7,
      max: 1,
      desc: 'Patient visit',
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
      idx: 8,
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
      idx: 9,
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
