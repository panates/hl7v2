import { HL7MessageDefinition } from '../../types.js';

export const ORM_O01: HL7MessageDefinition = {
  desc: 'Order message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and Comments (for Header)',
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
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and Comments (for Patient ID)',
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
              desc: 'Patient Visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient Visit- Additional Info',
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
              desc: 'Insurance Additional Information',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance Additional Information, Certification',
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
          desc: 'Allergy Information',
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
          desc: 'Common Order',
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
              desc: 'Notes and Comments (for Detail)',
            },
            CTD: {
              idx: 2,
              max: 1,
              desc: 'Contact Data',
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
                  desc: 'Observation/Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for Results)',
                },
              },
            },
          },
        },
        FT1: {
          idx: 2,
          desc: 'Financial Transaction',
        },
        CTI: {
          idx: 3,
          desc: 'Clinical Trial Identification',
        },
        BLG: {
          idx: 4,
          max: 1,
          desc: 'Billing Segment',
        },
      },
    },
  },
};
