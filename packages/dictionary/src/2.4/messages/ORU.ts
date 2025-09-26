import { HL7MessageDefinition } from '../../types.js';

export const ORU: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    PATIENT_RESULT: {
      idx: 1,
      min: 1,
      desc: 'Patient result',
      segments: {
        PATIENT: {
          idx: 0,
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
            NK1: {
              idx: 2,
              desc: 'Next of kin / associated parties',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and comments',
            },
            VISIT: {
              idx: 4,
              max: 1,
              desc: 'Visit',
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
        ORDER_OBSERVATION: {
          idx: 1,
          min: 1,
          desc: 'Order observation',
          segments: {
            ORC: {
              idx: 0,
              max: 1,
              desc: 'Common order',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Observation request',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
            CTD: {
              idx: 3,
              max: 1,
              desc: 'Contact data',
            },
            OBSERVATION: {
              idx: 4,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'Observation/result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
              },
            },
            FT1: {
              idx: 5,
              desc: 'Financial transaction',
            },
            CTI: {
              idx: 6,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 2,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
