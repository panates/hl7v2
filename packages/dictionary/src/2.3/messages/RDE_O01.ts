import { HL7MessageDefinition } from '../../types.js';

export const RDE_O01: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment encoded order message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and comments segment',
    },
    PATIENT: {
      idx: 2,
      max: 1,
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
        NTE: {
          idx: 2,
          desc: 'Notes and comments segment',
        },
        PATIENT_VISIT: {
          idx: 3,
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
          idx: 4,
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
        GT1: {
          idx: 5,
          max: 1,
          desc: 'Guarantor',
        },
        AL1: {
          idx: 6,
          desc: 'Patient allergy information',
        },
      },
    },
    ORDER: {
      idx: 3,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order segment',
        },
        ORDER_DETAIL: {
          idx: 1,
          max: 1,
          desc: 'Order detail',
          segments: {
            RXO: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy prescription order segment',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments segment',
            },
            RXR: {
              idx: 2,
              min: 1,
              desc: 'Pharmacy route segment',
            },
            COMPONENT: {
              idx: 3,
              max: 1,
              desc: 'Component',
              segments: {
                RXC: {
                  idx: 0,
                  min: 1,
                  desc: 'Pharmacy component order segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments segment',
                },
              },
            },
          },
        },
        RXE: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Pharmacy encoded order segment',
        },
        RXR: {
          idx: 3,
          min: 1,
          desc: 'Pharmacy route segment',
        },
        RXC: {
          idx: 4,
          desc: 'Pharmacy component order segment',
        },
        OBSERVATION: {
          idx: 5,
          min: 1,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              max: 1,
              desc: 'Observation segment',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments segment',
            },
          },
        },
        CTI: {
          idx: 6,
          max: 1,
          desc: 'Clinical trial identification',
        },
      },
    },
  },
};
