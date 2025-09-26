import { HL7MessageDefinition } from '../../types.js';

export const ORM_O01: HL7MessageDefinition = {
  desc: 'Order message',
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
    ORDER: {
      idx: 3,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        ORDER_DETAIL: {
          idx: 1,
          max: 1,
          desc: 'Order detail',
          segments: {
            'OBR,RQD,RQ1,RXO,ODS,ODT': {
              idx: 0,
              desc: 'Details',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
            CTD: {
              idx: 2,
              max: 1,
              desc: 'Contact data',
            },
            DG1: {
              idx: 3,
              desc: 'Diagnosis',
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
        FT1: {
          idx: 2,
          desc: 'Financial transaction',
        },
        CTI: {
          idx: 3,
          desc: 'Clinical trial identification',
        },
        BLG: {
          idx: 4,
          max: 1,
          desc: 'Billing',
        },
      },
    },
  },
};
