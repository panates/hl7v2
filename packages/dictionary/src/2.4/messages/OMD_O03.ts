import { HL7MessageDefinition } from '../../types.js';

export const OMD_O03: HL7MessageDefinition = {
  desc: 'Diet order',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and comments',
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
          desc: 'Patient additional demographic',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
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
              desc: 'Insurance additional information',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance additional information, certification',
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
    ORDER_DIET: {
      idx: 3,
      min: 1,
      desc: 'Order diet',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        DIET: {
          idx: 1,
          max: 1,
          desc: 'Diet',
          segments: {
            ODS: {
              idx: 0,
              min: 1,
              desc: 'Dietary orders, supplements, and preferences',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
            OBSERVATION: {
              idx: 2,
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
    },
    ORDER_TRAY: {
      idx: 4,
      desc: 'Order tray',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        ODT: {
          idx: 1,
          min: 1,
          desc: 'Diet tray instructions',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
        },
      },
    },
  },
};
