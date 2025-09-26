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
    SFT: {
      idx: 2,
      desc: 'Software segment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Original style query filter',
    },
    PID: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 6,
      max: 1,
      desc: 'Patient additional demographic',
    },
    NK1: {
      idx: 7,
      desc: 'Next of kin / associated parties',
    },
    PATIENT_VISIT: {
      idx: 8,
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
      idx: 9,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 10,
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
      idx: 11,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/quantity relationship',
            },
          },
        },
        RXA: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Pharmacy/treatment administration',
        },
        RXR: {
          idx: 3,
          max: 1,
          desc: 'Pharmacy/treatment route',
        },
        OBSERVATION: {
          idx: 4,
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
