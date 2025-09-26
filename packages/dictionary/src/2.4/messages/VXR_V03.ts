import { HL7MessageDefinition } from '../../types.js';

export const VXR_V03: HL7MessageDefinition = {
  desc: 'Vaccination record response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Original style query filter',
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
      desc: 'Patient additional demographic',
    },
    NK1: {
      idx: 6,
      desc: 'Next of kin / associated parties',
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
    GT1: {
      idx: 8,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 9,
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
          desc: 'Insurance additional information',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: 'Insurance additional information, certification',
        },
      },
    },
    ORDER: {
      idx: 10,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          max: 1,
          desc: 'Common order',
        },
        RXA: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Pharmacy/treatment administration',
        },
        RXR: {
          idx: 2,
          max: 1,
          desc: 'Pharmacy/treatment route',
        },
        OBSERVATION: {
          idx: 3,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
  },
};
