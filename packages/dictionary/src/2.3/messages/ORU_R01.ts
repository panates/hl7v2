import { HL7MessageDefinition } from '../../types.js';

export const ORU_R01: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
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
              desc: 'Patient demographic',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
            },
            VISIT: {
              idx: 3,
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
              desc: 'Common order segment',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Observation request segment',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
            },
            OBSERVATION: {
              idx: 3,
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
              idx: 4,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 2,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};
