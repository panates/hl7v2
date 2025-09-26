import { HL7MessageDefinition } from '../../types.js';

export const RDS_O01: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment dispense information',
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
        AL1: {
          idx: 3,
          desc: 'Patient allergy information',
        },
        PATIENT_VISIT: {
          idx: 4,
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
            ORDER_DETAIL_SUPPLEMENT: {
              idx: 1,
              max: 1,
              desc: 'Order detail supplement',
              segments: {
                NTE: {
                  idx: 0,
                  min: 1,
                  desc: 'Notes and comments segment',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy route segment',
                },
                COMPONENT: {
                  idx: 2,
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
          },
        },
        ENCODING: {
          idx: 2,
          max: 1,
          desc: 'Encoding',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy encoded order segment',
            },
            RXR: {
              idx: 1,
              min: 1,
              desc: 'Pharmacy route segment',
            },
            RXC: {
              idx: 2,
              desc: 'Pharmacy component order segment',
            },
          },
        },
        RXD: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Pharmacy dispense segment',
        },
        RXR: {
          idx: 4,
          min: 1,
          desc: 'Pharmacy route segment',
        },
        RXC: {
          idx: 5,
          desc: 'Pharmacy component order segment',
        },
        OBSERVATION: {
          idx: 6,
          min: 1,
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
