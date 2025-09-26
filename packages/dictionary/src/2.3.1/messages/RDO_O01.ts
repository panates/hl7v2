import { HL7MessageDefinition } from '../../types.js';

export const RDO_O01: HL7MessageDefinition = {
  desc: 'Rdo message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    NTE: {
      idx: 1,
      desc: 'NTE - notes and comments segment',
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
          desc: 'PID - patient identification segment',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient Additional Demographic',
        },
        NTE: {
          idx: 2,
          desc: 'NTE - notes and comments segment',
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
              desc: 'PV1 - patient visit segment-',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'PV2 - patient visit - additional information segment',
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
              desc: 'IN1 - insurance segment',
            },
            IN2: {
              idx: 1,
              max: 1,
              desc: 'IN2 - insurance additional information segment',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'IN3 - insurance additional information, certification segment',
            },
          },
        },
        GT1: {
          idx: 5,
          max: 1,
          desc: 'GT1 - guarantor segment',
        },
        AL1: {
          idx: 6,
          desc: 'AL1 - patient allergy information segment',
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
          desc: 'ORC - common order segment',
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
              desc: 'RXO - pharmacy/treatment order segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
            RXR: {
              idx: 2,
              min: 1,
              desc: 'RXR - pharmacy/treatment route segment',
            },
            COMPONENT: {
              idx: 3,
              max: 1,
              desc: 'Component',
              segments: {
                RXC: {
                  idx: 0,
                  min: 1,
                  desc: 'RXC - pharmacy/treatment component order segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
                },
              },
            },
            OBSERVATION: {
              idx: 4,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'OBX - observation/result segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
                },
              },
            },
          },
        },
        BLG: {
          idx: 2,
          max: 1,
          desc: 'BLG - billing segment',
        },
      },
    },
  },
};
